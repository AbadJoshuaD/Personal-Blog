import React, { Fragment } from "react";
import "./App.css";
import "typeface-noto-serif-sc";
import Navbar from "./components/Navbar/navbar.component";
import Header from "./components/Header/header.component";
import HomePage from "./pages/Home/home.component";
import TechPage from "./pages/Tech/tech.component";
import TipsPage from "./pages/Tips/tips.component";
import GamingPage from "./pages/Gaming/gaming.component";

import { Route, Switch } from "react-router";
function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tech" component={TechPage} />
        <Route path="/tips" component={TipsPage} />
        <Route path="/Gaming" component={GamingPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
