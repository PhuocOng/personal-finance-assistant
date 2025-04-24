// src/pages/About.jsx
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-background"></div>
      <div className="about-content">
        <h2>About AI Finance Assistant</h2>
        <p>
          Born from late nights parsing financial reports and building tools, AI Finance Assistant is the product of frustration
          turned innovation. Founded by <strong>Peter Ong</strong>, a software engineer obsessed with productivity and finance,
          this project aims to bridge humans and AI through intelligent document understanding.
        </p>
        <p>
          Our assistant reads like an analyst, reasons like a human, and responds like a pro. Upload a report. Ask anything.
          It delivers answers in seconds — from earnings breakdowns to investment insights.
        </p>

        <div className="tech-strip">
          <span className="tech-badge">React</span>
          <span className="tech-badge">FastAPI</span>
          <span className="tech-badge">LangChain</span>
          <span className="tech-badge">OpenAI GPT-4</span>
          <span className="tech-badge">Render</span>
        </div>

        <div className="about-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iVOKh5ubzQVP1JmsY-RvW1XxAwHYFeYa1w&s" alt="Founder coding late at night" />
          <p className="caption">Every line of code written to save analysts hours of manual work.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
