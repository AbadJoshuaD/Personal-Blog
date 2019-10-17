import React from "react";
import "./tech.styles.scss";
import CustomBlogPost from "../../components/CustomBlogPost/customblogpost.component";
import CustomTitleHeader from "../../components/CustomTitleHeader/customtitleheader.component";
import CustomCategoryDescription from "../../components/CustomCategoryDescription/customcategorydescription.component";

const TechPage = () => (
  <div className="technology-page-container">
    <div className="left">
      <CustomBlogPost isTechMainBlog></CustomBlogPost>
      <CustomTitleHeader isSubtitle title={"latest"}></CustomTitleHeader>
      <CustomBlogPost isCategoryTechLatest></CustomBlogPost>
      <CustomBlogPost isCategoryTechLatest></CustomBlogPost>
      <CustomBlogPost isCategoryTechLatest></CustomBlogPost>
      <CustomBlogPost isCategoryTechLatest></CustomBlogPost>
      <CustomBlogPost isCategoryTechLatest></CustomBlogPost>
    </div>
    <div className="right">
      <CustomCategoryDescription></CustomCategoryDescription>
      <CustomTitleHeader
        isSubtitle
        title={"Popular in technology"}
      ></CustomTitleHeader>
      <CustomBlogPost isPopularTechLatest></CustomBlogPost>
      <CustomBlogPost isPopularTechLatest></CustomBlogPost>
      <CustomBlogPost isPopularTechLatest></CustomBlogPost>
    </div>
  </div>
);

export default TechPage;
