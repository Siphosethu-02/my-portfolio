import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container">
        <a href="#home" className="nav-brand" onClick={closeMobile}>
          <span className="brand-accent">&lt;</span>
          Siphosethu Dlamini
          <span className="brand-accent"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions-desktop">
          <a
            href="/SiphosethuCV.pdf"
            download
            className="nav-cv-btn"
            title="Download Siphosethu Dlamini CV"
          >
            <FaFileDownload />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Slide-down / Drawer */}
        <div className={`nav-mobile-drawer ${mobileOpen ? "open" : ""}`}>
          <ul className="nav-links-mobile">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={closeMobile}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-cv-item">
              <a
                href="/SiphosethuCV.pdf"
                download
                className="btn-primary mobile-cv-btn"
                onClick={closeMobile}
              >
                <FaFileDownload />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
