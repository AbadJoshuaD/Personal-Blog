import React from "react";
import "./navbar.styles.scss";
import { ReactComponent as BrandLogo } from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <div className="navbar-container">
    <BrandLogo class="brand-logo"></BrandLogo>
    <div className="navbar-options">
      <FontAwesomeIcon
        className="navbar-option nav-search-icon"
        icon={faSearch}
      />
      <input
        className="navbar-option nav-search"
        type="search"
        name="search"
        placeholder="Search Josh Blog Post"
      />
      <a className="navbar-option nav-sign-in" href="#">
        Sign In
      </a>
    </div>
  </div>
);
export default Navbar;
