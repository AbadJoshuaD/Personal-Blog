import React from "react";
import "../CustomBlogPost/customblogpost.styles.scss";

const CustomBlogPost = ({
  isLatestMainBlog,
  isLatestSubBlog,
  isCategoryBlog,
  isPopularBlog,
  isTechMainBlog,
  isCategoryTechLatest,
  isPopularTechLatest
}) => (
  <div
    className={`${isLatestMainBlog ? "latest-main-blog-container" : ""}
    ${isLatestSubBlog ? "latest-sub-main-blog-container" : ""}
    ${isCategoryBlog ? "category-blog-content-container" : ""}
    ${isPopularBlog ? "popular-blog-content-container" : ""}
    ${isTechMainBlog ? "tech-main-content-container" : ""}
    ${isCategoryTechLatest ? "tech-latest-content-container" : ""}
    ${isPopularTechLatest ? "tech-popular-content-container" : ""} container`}
  >
    <img
      className="custom-img"
      src="https://cdn-images-1.medium.com/focal/630/278/47/35/1*yUxrjftSyaCLmFSnj52POA.jpeg"
      alt=""
    />
    <div className="custom-blog-post">
      <h1 className="blog-title">
        Yes, Critical Black Joy Exists at Comic-Con
      </h1>
      <p className="blog-description">
        Black cosplayers speak out on cultural appropriation and the gift of
        being seen
      </p>
      <div className="blog-author-info">
        <p className="blog-author">
          <img
            class="blog-profile-img"
            src="https://cdn-images-1.medium.com/focal/630/278/47/35/1*yUxrjftSyaCLmFSnj52POA.jpeg"
            alt=""
          />
          By: Joshua Abad
        </p>
        <p className="blog-date">Oct 14 • 6 min read</p>
      </div>
    </div>
  </div>
);

export default CustomBlogPost;
