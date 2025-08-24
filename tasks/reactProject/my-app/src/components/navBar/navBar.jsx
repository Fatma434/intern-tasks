import { useState } from "react";
import "./nav.css";

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      {/* Search Bar */}
      {showSearch && (
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search" 
          />
        </div>
      )}

      <nav className="navbar">
        {/* Left side */}
        <div className="nav-left">
          {/* Normal links (hidden on small screens) */}
          <div className="menu-links desktop-only">
            <a href="#shop" className="nav-link">SHOP</a>
            <a href="#about" className="nav-link">ABOUT</a>
          </div>

          {/* Hamburger (only on small screens) */}
          <button 
            className="nav-btn hamburger mobile-only" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bx bx-menu"></i>
          </button>

          {/* Search button */}
          <button 
            className="nav-btn"
            onClick={() => setShowSearch(!showSearch)}
          >
            <i className="bx bx-search"></i>
          </button>
        </div>

        {/* Title */}
        <h4 className="nav-title">THE FIGMA STORE</h4>

        {/* Right side */}
        <div className="nav-right">
          <button className="nav-btn">
            <i className="bx bx-user"></i>
          </button>
          <a href="#cart" className="nav-link">
            CART 0
          </a>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button 
            className="close-btn" 
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <a href="#shop" className="nav-link">SHOP</a>
          <a href="#about" className="nav-link">ABOUT</a>
        </div>
      )}
    </div>
  );
}
