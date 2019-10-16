import React from "react";
import "../CategoryBlog/categoryblog.styles.scss";

const CategoryBlog = () => (
  <div className="category-blog-container">
    <div className="category-header-container">
      <h1 className="category-title">Technology</h1>
      <a className="category-more">More ></a>
    </div>
    <div className="category-blog-container">
      <div className="category-blog-image-container">
        <img src="" alt="" />
      </div>
      <div className="category-blog-content-container">
        <h1 className="category-blog-title">
          Yes, Critical Black Joy Exists at Comic-Con
        </h1>
        <p className="category-blog-description">
          Black cosplayers speak out on cultural appropriation and the gift of
          being seen
        </p>
        <p className="category-blog-author">By: Joshua Abad</p>
        <p className="category-blog-post-date">Oct 14 • 6 min read</p>
      </div>
    </div>
  </div>
);

export default CategoryBlog;
