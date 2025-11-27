import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-close menu after 5 seconds
  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => {
        setMenuOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Close when link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="container">
      <h2>Personal finance</h2>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`menu-btn ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/credit" onClick={handleLinkClick}>Credit</Link></li>
        <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
