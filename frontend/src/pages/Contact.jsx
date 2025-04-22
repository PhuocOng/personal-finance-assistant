// src/pages/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Got feedback, feature requests, or questions?
          We'd love to hear from you.
        </p>
        <ul>
          <li>📧 Email: financeai@myproject.com</li>
          <li>🐦 Twitter: <a href="https://twitter.com/financeai" target="_blank" rel="noreferrer">@financeai</a></li>
          <li>🌐 Website: <a href="https://www.financeai.io" target="_blank" rel="noreferrer">www.financeai.io</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
