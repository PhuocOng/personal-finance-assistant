import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fakeBotResponses = [
    "Hello! How can I help you today?",
    "That's an interesting question!",
    "Let me think about that...",
    "I'm here to chat with you!",
    "Could you clarify what you mean?",
    "Sure! Let me explain...",
    "Nice to meet you!",
    "I’m just a bot, but I’ll do my best!"
  ];

  const getBotReply = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const reply = fakeBotResponses[Math.floor(Math.random() * fakeBotResponses.length)];
        resolve(reply);
      }, 1000); // 1 second delay to simulate API
    });
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const botText = await getBotReply();
    const botMessage = { sender: 'bot', text: botText };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="chat-history">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default App
