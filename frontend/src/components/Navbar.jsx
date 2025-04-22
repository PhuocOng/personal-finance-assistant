import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          💬 <span className="brand-highlight">AI Finance Assistant</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/chat">Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/achievements">Achievements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
