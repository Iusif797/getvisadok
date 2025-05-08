import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">GETVISADOK</div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
