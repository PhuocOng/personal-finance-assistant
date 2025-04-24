// src/pages/Achievements.jsx
import './Achievements.css';

function Achievements() {
  return (
    <section className="achievements-section">
      <div className="achievements-content">
        <h2>🚀 Achievements</h2>
        <p className="subtitle">Milestones, wins, and progress we're proud of.</p>
        <ul>
          <li>Integrated GPT-4 Turbo for real-time Q&A over PDF content</li>
          <li>Processes and summarizes financial reports up to 50+ pages</li>
          <li>Used by students in the DePauw University Investment Group</li>
          <li>🏆 Won 1st place at Midwest FinTech Hackathon 2025</li>
          <li>Built with React + FastAPI + LangChain, deployed on Render</li>
          <li>Supports structured financial reasoning (e.g., “What’s the EBITDA trend?”)</li>
          <li>Hit 200+ queries in one week with zero downtime</li>
          <li>Received feedback from analysts at early-stage startups</li>
          <li>Added secure upload + GPT-summarized PDF preview feature</li>
          <li>AI Assistant now handles multi-document conversation context</li>
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
