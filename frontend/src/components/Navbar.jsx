// src/components/Navbar.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // We'll style it separately

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">💬 <span className="brand-highlight">AI Finance Assistant</span></a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link nav-glow" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-glow" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-glow" href="#achievements">Achievements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-glow" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
