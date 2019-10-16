import React from "react";
import "../PopularBlog/popularblog.styles.scss";

const PopularBlog = () => (
  <div className="popular-blog-container">
    <div className="popular-header-container">
      <h1 className="popular-title"> Josh Most Popular Blog Post</h1>
      <a className="popular-more">More ></a>
    </div>
    <div className="popular-content-container">
      <div className="popular-blog-container">
        <div className="popular-rank-circle">1</div>
        <div className="popular-blog-content">
          <h1>Yes, Critical Black Joy Exists at Comic-Con</h1>
          <p>
            Black cosplayers speak out on cultural appropriation and the gift of
            being seen
          </p>
          <p>By: Joshua Abad</p>
          <p>Oct 14 • 6 min read</p>
        </div>
      </div>
    </div>
  </div>
);

export default PopularBlog;
