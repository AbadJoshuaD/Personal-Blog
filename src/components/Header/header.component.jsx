import React from "react";
import "../Header/header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <Link to="/" className="header-links header-home">
      HOME
    </Link>
    <Link to="/tech" className="header-links header-tech">
      TECH
    </Link>
    <Link to="/tips" className="header-links header-tips">
      TIPS
    </Link>
    <Link to="/gaming" className="header-links header-dota">
      GAMING
    </Link>
    <Link to="/aboutme" className="header-links header-aboutme">
      ABOUT
    </Link>
  </div>
);

export default Header;
