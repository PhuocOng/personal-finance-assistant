// src/pages/Home.jsx
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-grid">
        <div className="home-text">
          <h1>Meet Your AI Finance Assistant</h1>
          <p className="lead">
            Upload reports. Ask questions. Get instant insights powered by GPT-4 Turbo.
          </p>
          <p>
            Built for financial analysts, startup founders, and data enthusiasts — this tool turns hours of reading into seconds of understanding.
          </p>
          <a href="#start" className="cta-button">Get Started</a>
        </div>

        <div className="home-image">
          <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=800&q=80" alt="AI Finance Assistant Dashboard" />
        </div>
      </div>

      <div className="story-block">
        <h2>Why I Built This</h2>
        <p>
          I'm Peter Ong, a software engineer with a passion for productivity and financial intelligence.
          After struggling to parse 100-page annual reports and lengthy investor decks, I realized we need better tools for humans to work *with* AI, not just use it. So I built this assistant — to save time, reduce cognitive load, and make financial data accessible to everyone.
        </p>
      </div>

      <div className="testimonial-block">
        <h2>Who Uses It?</h2>
        <div className="testimonials">
          <div className="testimonial">
            <h3>🚀 Startup Founders</h3>
            <p>“I can understand competitor reports in minutes — this is my secret weapon during fundraising.”</p>
          </div>
          <div className="testimonial">
            <h3>📊 Analysts</h3>
            <p>“No more Ctrl+F chaos. I drop in a report and get bullet-point answers instantly.”</p>
          </div>
          <div className="testimonial">
            <h3>🧠 Curious Learners</h3>
            <p>“I use this to learn finance faster than ever. It's like having a tutor in my browser.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
