// src/pages/Achievements.jsx
import './Achievements.css';

function Achievements() {
  return (
    <section className="achievements-section">
      <div className="achievements-content">
        <h2>Achievements</h2>
        <ul>
          <li>Integrated GPT-4 Turbo for real-time Q&A over PDF content</li>
          <li>Successfully processes and summarizes financial reports up to 50 pages</li>
          <li>Built with a React + FastAPI stack and deployed on Render</li>
          <li>Supports structured reasoning over uploaded documents (e.g., "What's the EBITDA trend?")</li>
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
