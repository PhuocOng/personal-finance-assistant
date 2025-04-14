from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from tempfile import NamedTemporaryFile
import fitz  # PyMuPDF
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain_community.llms import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()

# -------- SETUP --------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
llm = OpenAI(temperature=0, openai_api_key=OPENAI_API_KEY, max_tokens=700)
qa_chain = load_qa_chain(llm, chain_type="stuff")

model_name = "ProsusAI/finbert"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)
finbert_pipeline = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)

# -------- GLOBAL MEMORY --------
db = None
chunks = []

# -------- HELPERS --------
def extract_text_from_pdf(file_path):
    doc = fitz.open(file_path)
    return "\n".join([page.get_text() for page in doc])

def chunk_text(text):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=2000,
        chunk_overlap=200,
        separators=["\n\n", "\n", ".", " "]
    )
    return splitter.split_text(text)

# -------- API MODELS --------
class Query(BaseModel):
    query: str

# -------- ROUTES --------
@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    global db, chunks

    # Save uploaded file temporarily
    with NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    # Extract + chunk
    text = extract_text_from_pdf(tmp_path)
    chunks = chunk_text(text)
    db = FAISS.from_texts(chunks, embeddings)

    # Prompt GPT to summarize
    prompt = (
        "You are a financial analyst assistant.\n"
        "Based on the following financial report, summarize the key financial highlights and risks.\n"
        "Here is the report content:\n\n"
        + text[:4000]  # Truncate to fit token limit
    )

    try:
        response = llm.invoke(prompt)
        return {
            "message": "PDF processed successfully",
            "summary": response.strip(),
            "chunks": len(chunks),
        }
    except Exception as e:
        return {
            "error": "Failed to get summary from GPT",
            "details": str(e),
            "chunks": len(chunks),
        }

@app.post("/ask")
def ask_question(q: Query):
    if not db:
        return {"error": "No document uploaded yet."}
    docs = db.similarity_search(q.query)
    answer = qa_chain.run(input_documents=docs, question=q.query)
    return {"answer": answer}

@app.post("/sentiment")
def analyze_sentiment(q: Query):
    result = finbert_pipeline(q.query)[0]
    return {"label": result['label'], "score": result['score']}

@app.get("/healthcheck")
def healthcheck():
    return {"status": "ok"} 