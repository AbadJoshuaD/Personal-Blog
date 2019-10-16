import React from "react";
import "../CustomPage/custompage.styles.scss";

const CustomPage = () => (
  <div className="custom-page-container">
    <div className="custom-page-main-latest">
      <img
        src="https://cdn-images-1.medium.com/focal/630/278/47/35/1*yUxrjftSyaCLmFSnj52POA.jpeg"
        alt=""
      />
      <h1 className="custom-page-main-title"></h1>
      <p className="custom-page-main-description"></p>
      <div className="custom-page-user-details">
        <img src="" alt="" className="custom-page-main-profilepic" />
        <p className="custom-page-author"></p>
        <p className="custom-page-date"></p>
      </div>
    </div>
  </div>
);
