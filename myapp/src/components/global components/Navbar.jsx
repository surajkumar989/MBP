import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="nav">
        <div className="image">
          <img src="./image01.svg" alt="logo" />
        </div>
        
        <ul className="nav-links">
          <li>
            Services <img src="./formkit_down.png" alt="down" />
          </li>
          <li>Pricing</li>
          <li>
            Industries <img src="./formkit_down.png" alt="down" />
          </li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>

        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className="book">
          <button>Get a consultation</button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              Services <img src="./formkit_down.png" alt="down" />
            </li>
            <li>Pricing</li>
            <li>
              Industries <img src="./formkit_down.png" alt="down" />
            </li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
