import React, { Fragment } from "react";
import "../Home/home.styles.scss";
import LatestBlog from "../../components/LatestBlog/latestblog.component";
import CategoryPopularBlogContainer from "../../components/CategoryPopularBlogContainer/categorypopularblogcontainer.component";

const HomePage = () => {
  return (
    <Fragment>
      <LatestBlog></LatestBlog>
      <CategoryPopularBlogContainer></CategoryPopularBlogContainer>
    </Fragment>
  );
};

export default HomePage;
