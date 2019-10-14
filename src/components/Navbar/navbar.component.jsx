import React from "react";
import "./navbar.styles.scss";
import { ReactComponent as BrandIcon } from "../../assets/logo.svg";

const Navbar = () => (
  <div className="navbar-container">
    <BrandIcon></BrandIcon>
    <div className="navbar-options">
      <i className="fa fa-search"></i>
      <input type="search" name="search" placeholder="Search Blog Post" />
      <img src="" alt="user-img" />
    </div>
  </div>
);
export default Navbar;
