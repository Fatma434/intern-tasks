import React from "react";
import "./footer.css";

export default function Footer() {

  const scrollTop =()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",}
    )
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="logo-section">
          <div className="logo-shape">
            <div className="logo-text top">THE</div>
            <div className="logo-text vertical">FIGMA</div>
            <div className="logo-text bottom">STORE</div>
          </div>
        </div>

        
        <div className="footer-content">
          <h2>
            OBJECTS<br />THAT INSPIRE.
          </h2>
          <div className="footer-links">
            <a href="#">FIGMA ↗</a>
            <a href="#">TWITTER</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">YOUTUBE</a>
          </div>
        </div>

      
        <div className="footer-right">
          <p>FAQ</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <div className="scroll-top" onClick={scrollTop}>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="lightgrey"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        </div>
      </div>

      <div className="footer-marquee">
        FIGMA'S ✺ MARVELOUSLY ⬤ CONSIDERED ◔ COLLECTION ⧫ OF ◈ OBJECTS ☕ FOR ❖ OUR ◘ TIME ✿ ON ⌁
      </div>
    </footer>
  );
}
