import React from "react";
import "../Tips/tips.styles.scss";
import CustomBlogPost from "../../components/CustomBlogPost/customblogpost.component";

const TipsPage = () => (
  <div className="tips-page-blog-container">
    <CustomBlogPost isTipsMainBlog></CustomBlogPost>
    <CustomBlogPost isTipsSubBlog></CustomBlogPost>
    <CustomBlogPost isTipsSubBlog></CustomBlogPost>
    <CustomBlogPost isTipsSubBlog></CustomBlogPost>
  </div>
);

export default TipsPage;
