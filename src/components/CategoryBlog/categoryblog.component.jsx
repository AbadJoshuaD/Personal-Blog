import React from "react";
import "../CategoryBlog/categoryblog.styles.scss";
import CustomBlogPost from "../CustomBlogPost/customblogpost.component";
import CustomTitleHeader from "../CustomTitleHeader/customtitleheader.component";

const CategoryBlog = () => (
  <div className="category-container">
    <CustomTitleHeader isCategory title={"Technology"}></CustomTitleHeader>
    <CustomBlogPost isCategoryBlog></CustomBlogPost>
    <CustomBlogPost isCategoryBlog></CustomBlogPost>
    <CustomBlogPost isCategoryBlog></CustomBlogPost>
    <CustomBlogPost isCategoryBlog></CustomBlogPost>
    <CustomBlogPost isCategoryBlog></CustomBlogPost>
    <CustomBlogPost isCategoryBlog></CustomBlogPost>
  </div>
);

export default CategoryBlog;
