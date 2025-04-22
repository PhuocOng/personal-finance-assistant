// src/pages/Achievements.jsx
function Achievements() {
    return (
      <section id="achievements" className="text-light py-5">
        <div className="container">
          <h2 className="mb-4 text-success">Achievements</h2>
          <ul>
            <li>✅ Integrated GPT-4 Turbo for real-time Q&A over PDF content</li>
            <li>📄 Successfully processes and summarizes financial reports up to 50 pages</li>
            <li>⚙️ Built with a React + FastAPI stack and deployed on Render</li>
            <li>🧠 Supports structured reasoning over uploaded documents (e.g., "What's the EBITDA trend?")</li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Achievements;