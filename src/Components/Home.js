import React, { useState } from "react";
import "./Home.css";
import logo from "../Components/MAWA.png"; // Adjust path if needed
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contribute" onClick={() => setMenuOpen(false)}>Contribute</a>
          <a href="#newsroom" onClick={() => setMenuOpen(false)}>Newsroom</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <h1>MAKE AMERICA WEALTHY AGAIN</h1>
        <p>Supporting policies that drive economic prosperity.</p>
        <button className="button-primary">Learn More</button>
      </div>

      {/* Other Sections */}
      <section id="about" className="section">
        <h2>About the SUPER PAC</h2>
        <p>We advocate for policies that support American prosperity and economic growth.</p>
      </section>

      <section id="contribute" className="section">
        <h2>Contribute</h2>
        <p>Your support helps us continue our mission.</p>
        <button className="button-primary">Donate Now</button>
      </section>

      <section id="newsroom" className="section">
        <h2>Newsroom</h2>
        <p>Stay updated with our latest news and announcements.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email us at <a href="mailto:info@superpac.com">info@superpac.com</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SUPER PAC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
