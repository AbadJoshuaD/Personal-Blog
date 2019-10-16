import React from "react";
import "../PopularBlog/popularblog.styles.scss";
import CustomTitleHeader from "../CustomTitleHeader/customtitleheader.component";
import CustomBlogPost from "../CustomBlogPost/customblogpost.component";

const PopularBlog = () => (
  <div className="popular-blog-container">
    <CustomTitleHeader
      isPopular
      title={"Josh Most Popular Blog"}
    ></CustomTitleHeader>
    <div className="popular-content-container">
      <div className="popular-rank-circle">01</div>
      <CustomBlogPost isPopularBlog></CustomBlogPost>
    </div>
    <div className="popular-content-container">
      <div className="popular-rank-circle">02</div>
      <CustomBlogPost isPopularBlog></CustomBlogPost>
    </div>
    <div className="popular-content-container">
      <div className="popular-rank-circle">03</div>
      <CustomBlogPost isPopularBlog></CustomBlogPost>
    </div>
    <div className="popular-content-container">
      <div className="popular-rank-circle">04</div>
      <CustomBlogPost isPopularBlog></CustomBlogPost>
    </div>
  </div>
);

export default PopularBlog;
