import React from "react";
import "../LatestBlog/latestblog.styles.scss";
import CustomBlogPost from "../CustomBlogPost/customblogpost.component";

const LatestBlog = () => (
  <div className="latest-blog-container">
    <div className="latest-blog main-blog">
      <CustomBlogPost isLatestMainBlog></CustomBlogPost>
    </div>
    <div className="latest-blog sub-blog">
      <div className="sub-blog-container">
        <CustomBlogPost isLatestSubBlog></CustomBlogPost>
      </div>
    </div>
    <div className="latest-blog sub-blog">
      <div className="sub-blog-container">
        <CustomBlogPost isLatestSubBlog></CustomBlogPost>
      </div>
    </div>
  </div>
);

export default LatestBlog;
