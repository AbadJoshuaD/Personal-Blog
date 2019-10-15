import React, { Fragment } from "react";
import "./App.css";
import "typeface-noto-serif-sc";
import Navbar from "./components/Navbar/navbar.component";
import Header from "./components/Header/header.component";
import LatestBlog from "./components/LatestBlog/latestblog.component";
import CategoryBlog from "./components/CategoryBlog/categoryblog.component";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <LatestBlog></LatestBlog>
      <CategoryBlog></CategoryBlog>
    </Fragment>
  );
}

export default App;
