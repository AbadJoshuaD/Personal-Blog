import React from "react";
import "../CustomTitleHeader/customtitleheader.styles.scss";

const CustomTitleHeader = ({ isCategory, isPopular, title }) => (
  <div
    className={`${isCategory ? "header-category-title" : ""}
  ${isPopular ? "header-popular-title" : ""}`}
  >
    <h1 className="header-title">{title}</h1>
    <a className="header-more">More ></a>
  </div>
);

export default CustomTitleHeader;
