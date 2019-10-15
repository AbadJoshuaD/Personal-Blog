import React, { Fragment } from "react";
import "./App.css";
import "typeface-noto-serif-sc";
import Navbar from "./components/Navbar/navbar.component";
import Header from "./components/Header/header.component";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
    </Fragment>
  );
}

export default App;
