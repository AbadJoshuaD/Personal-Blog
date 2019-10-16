import React from "react";
import "./categorypopularblogcontainer.styles.scss";
import CategoryBlog from "../CategoryBlog/categoryblog.component";
import PopularBlog from "../PopularBlog/popularblog.component";

const CategoryPopularBlogContainer = () => {
  return (
    <div className="category-popular-blog-container">
      <CategoryBlog></CategoryBlog>
      <PopularBlog></PopularBlog>
    </div>
  );
};

export default CategoryPopularBlogContainer;
