import React, { useState } from "react";
import "./Home.css";
import logo from "../Components/MAWA.png"; // Adjust path if needed
import fortuneLogo from "../Components/logo fortune.png"; // Fortune logo added here
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#contribute" onClick={() => scrollToSection("contribute")}>Contribute</a>
          <a href="#newsroom" onClick={() => scrollToSection("newsroom")}>Newsroom</a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <h1>MAKE AMERICA WEALTHY AGAIN</h1>
        <p>Supporting policies that drive economic prosperity.</p>
        <button className="button-primary" onClick={() => scrollToSection("about")}>
          Learn More
        </button>
      </div>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Our SUPER PAC</h2>
        <p>
          Make America Wealthy Again (MAWA) is a dedicated Super Political Action Committee (Super PAC)
          committed to revitalizing the economic prosperity of every American.
        </p>
        <p>
          Our mission centers on promoting free-market capitalism, economic freedom, and individual prosperity,
          with a particular focus on supporting innovative enterprises that embrace decentralized finance.
        </p>
        <p>
          By advocating for policies that remove barriers to economic growth and championing financial literacy,
          MAWA aims to create an environment where all citizens have the opportunity to achieve financial success.
        </p>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="section">
        <h2>Contribute</h2>
        <p>
          Your support is vital to our mission of making every American wealthy again. By contributing to MAWA,
          you are investing in a future where economic freedom and individual prosperity are accessible to all.
        </p>
        <p>Together, we can advocate for policies and initiatives that pave the way for financial success across the nation.</p>
      </section>

      {/* Newsroom Section */}
      <section id="newsroom" className="section">
        <h2>Recent Press Releases</h2>
        <ul>
          <li>
            <a href="https://www.prnewswire.com" target="_blank" rel="noopener noreferrer">
              MAWA Appeals to President Trump to Support Roger Ver Amid Potential Extradition
            </a>
          </li>
          <li>
            <a href="https://www.finance.yahoo.com" target="_blank" rel="noopener noreferrer">
              MAWA Applauds President Trump's Pardon of Silk Road Founder Ross William Ulbricht
            </a>
          </li>
          <li>
            <a href="https://fortune.com/2025/02/13/trump-admin-cryptocurrency-blockchain-technology/" target="_blank" rel="noopener noreferrer">
              What is Trump admin’s stance on cryptocurrency and blockchain technology? |               <img src={fortuneLogo} alt="Fortune Logo" style={{ height: "40px", marginRight: "10px", verticalAlign: "middle" }} />

            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to get involved? Reach out to us at  
          <a href="mailto:info@MakeAmericaWealthyAgain.US"> info@MakeAmericaWealthyAgain.US</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SUPER PAC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
