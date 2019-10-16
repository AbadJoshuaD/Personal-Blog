import React, { Fragment } from "react";
import "./App.css";
import "typeface-noto-serif-sc";
import Navbar from "./components/Navbar/navbar.component";
import Header from "./components/Header/header.component";
import HomePage from "./pages/Home/home.component";
import CustomPage from "./pages/CustomPage/custompage.component";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <CustomPage></CustomPage>
    </Fragment>
  );
}

export default App;
