// src/pages/Home.jsx
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Welcome to AI Finance Assistant</h1>
        <p className="lead">
          Chat with financial reports, extract insights, and get answers instantly using GPT-4 Turbo.
          Built for analysts, startups, and curious minds who need to work faster with data.
        </p>
        <p>
          Upload your PDF reports and ask any questions — your AI assistant will summarize and explain them clearly.
        </p>
      </div>
    </section>
  );
}

export default Home;
