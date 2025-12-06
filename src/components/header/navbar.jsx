import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../authentication/authcontext";
import { useContext } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  //const [user, setUser] = useState(null);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => setMenuOpen(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  return (
    <nav className="container">
      <h2>Personal Finance</h2>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`menu-btn ${menuOpen ? "open" : ""}`}>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/credit" onClick={() => setMenuOpen(false)}>Credit</Link></li>
        <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>

        {/* If user is logged in → show username + logout */}
        {user ? (
          <>
            <li className="username">
              👤 {capitalize(user)}
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          /* Else show Login */
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
