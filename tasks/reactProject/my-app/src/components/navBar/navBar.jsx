import { useState } from "react";
import "./nav.css";

export default function NavBar() {
const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="nav-wrapper">

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
    
      <div className="nav-left">
        <a href="#shop" className="nav-link">
          SHOP
        </a>
        <a href="#about" className="nav-link">
          ABOUT
        </a>
        <button className="nav-btn"
        onClick={() => setShowSearch(!showSearch)}>
          <i className="bx bx-search"></i>
        </button>
      </div>

      
      <h4 className="nav-title">THE FIGMA STORE</h4>

    
      <div className="nav-right">
        <button href="#profile" className="nav-btn"
         > <i className='bx bx-user' ></i> </button>
        <a href="#cart" className="nav-link">
          CART 0
        </a>
      </div>
 <div className="cont">
    </div>

    </nav>
    
    </div>
   
  );
}
