import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotReply = async (messages) => {
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    const chatMessages = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful and friendly assistant." },
        ...chatMessages
      ],
      temperature: 0.7
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage = { sender: 'user', text: input, time: now };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    setIsTyping(true);
    const botText = await getBotReply(newMessages);
    setIsTyping(false);
    const botMessage = { sender: 'bot', text: botText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = { sender: 'user', text: `[Uploaded PDF: ${file.name}]`, time: now };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      const botMessage = {
        sender: 'bot',
        text: data.summary || "Received your file, but couldn't extract summary.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: "Upload failed 😢", time: now }]);
    }

    setIsTyping(false);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="chat-history">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-row ${msg.sender}`}>
              <div className="avatar" data-label={msg.sender === 'user' ? 'USER' : 'BOT'}></div>

              <div className={`message ${msg.sender}`}>
                <div>{msg.text}</div>
                <div className="timestamp">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {isTyping && (
          <div className="message bot">
            <em>Bot is typing...</em>
          </div>
        )}

        <div className="input-area">
          <label className="upload-btn">
            📎 Upload PDF
            <input type="file" accept=".pdf" onChange={handleFileUpload} hidden />
          </label>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about finance..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
