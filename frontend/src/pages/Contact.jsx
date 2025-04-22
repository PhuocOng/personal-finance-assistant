function Contact() {
    return (
      <section id="contact" className="text-light py-5 bg-dark border-top">
        <div className="container">
          <h2 className="mb-4 text-success">Contact Us</h2>
          <p>
            Got feedback, feature requests, or questions?
            We'd love to hear from you.
          </p>
          <ul>
            <li>📧 Email: financeai@myproject.com</li>
            <li>🐦 Twitter: <a href="https://twitter.com/financeai" className="text-info">@financeai</a></li>
            <li>🌐 Website: <a href="https://www.financeai.io" className="text-info">www.financeai.io</a></li>
          </ul>
        </div>
      </section>
    );
}

export default Contact;