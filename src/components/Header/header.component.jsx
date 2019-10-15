import React from "react";
import "../Header/header.styles.scss";

const Header = () => (
  <div className="header-container">
    <a href="#home" className="header-links header-home">
      HOME
    </a>
    <a href="#tech" className="header-links header-tech">
      TECH
    </a>
    <a href="#tips" className="header-links header-tips">
      TIPS
    </a>
    <a href="#dota" className="header-links header-dota">
      DOTA
    </a>
  </div>
);

export default Header;
