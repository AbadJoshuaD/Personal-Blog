import React from "react";
import "../Gaming/gaming.styles.scss";
import CustomBlogPost from "../../components/CustomBlogPost/customblogpost.component";

const GamingPage = () => (
  <div className="gaming-page-container">
    <CustomBlogPost isGamingMainBlog></CustomBlogPost>
    <CustomBlogPost isGamingSubBlog></CustomBlogPost>
    <CustomBlogPost isGamingSubBlog></CustomBlogPost>
    <CustomBlogPost isGamingMainBlog></CustomBlogPost>
    <CustomBlogPost isGamingSubBlog></CustomBlogPost>
    <CustomBlogPost isGamingSubBlog></CustomBlogPost>
    <CustomBlogPost isGamingMainBlog></CustomBlogPost>
    <CustomBlogPost isGamingSubBlog></CustomBlogPost>
    <CustomBlogPost isGamingSubBlog></CustomBlogPost>
  </div>
);

export default GamingPage;
