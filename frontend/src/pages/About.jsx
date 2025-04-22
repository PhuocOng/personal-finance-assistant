// src/pages/About.jsx
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          AI Finance Assistant was created to simplify the way professionals interact with financial documents.
          Instead of reading hundreds of pages, just upload a report and ask what matters most.
        </p>
        <p>
          Our system uses OpenAI's GPT-4 Turbo to power financial Q&A, summarization, and reasoning.
          The frontend is built with React and Bootstrap, and the backend runs on FastAPI with LangChain to process and analyze PDF files.
        </p>
      </div>
    </section>
  );
}

export default About;
