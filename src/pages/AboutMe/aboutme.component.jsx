import React from "react";
import "../AboutMe/aboutme.styles.scss";
import profile from "../../assets/profile.png";
import CustomTitleHeader from "../../components/CustomTitleHeader/customtitleheader.component";

const AboutMePage = () => (
  <div className="about-me-page-container">
    <CustomTitleHeader isSubtitle title={"About Me"} />
    <div className="about-me-page-content-container">
      <div className="about-me-profile-container">
        <img className="about-me-img" src={profile} alt="" />
        <h1 className="about-me-titles">Info</h1>
        <hr />
        <p className="about-me-info">Joshua Abad</p>
        <p className="about-me-info">Computer Engineer</p>
        <p className="about-me-info">Cubao Quezon City, Philippines</p>
        <h1 className="about-me-titles">Contacts</h1>
        <hr />
        <a href="" className="about-me-contacts">
          abad.joshuad@gmail.com
        </a>
        <a href="" className="about-me-contacts">
          live:abad.joshuad
        </a>
        <a href="" className="about-me-contacts">
          abad.joshuad
        </a>
        <a href="" className="about-me-contacts">
          AbadJoshuaD
        </a>
        <h1 className="about-me-titles">Tech Stack</h1>
        <hr />
        <p className="about-me-tech-stack">Python</p>
        <p className="about-me-tech-stack">JavaScript</p>
        <p className="about-me-tech-stack">HTML5</p>
        <p className="about-me-tech-stack">CSS3</p>
        <p className="about-me-tech-stack">ReactJS</p>
        <p className="about-me-tech-stack">Node JS</p>
        <p className="about-me-tech-stack">Mongo DB</p>
        <p className="about-me-tech-stack">Graph QL</p>
        <p className="about-me-tech-stack">Apollo</p>
        <p className="about-me-tech-stack">MySQL</p>
        <h1 className="about-me-titles">Books</h1>
        <hr />
      </div>
      <div className="about-me-essay-container">
        <p>
          Hi I am Joshua D. Abad, a computer engineering graduate at
          Technological Institute of the Philippines Quezon City. I made this
          blog to share with you guys my journey on pursuing my dream career in
          software development, insights and personal hacks in life and my
          passion on gaming. I quitted my job in order to teach my self web
          development. A pure passion, dedication and sacrifices was made in
          order to achieve this career goal. <br></br>
          <br></br> As of now I am still in the process of developing my
          portfolio and this blog is one of the main projects that i will be
          including to my portfolio projects. I am an aspiring full stack
          developer, I chose this path because I love the idea of software
          development in terms of transforming information in a meaningful
          manner that solves real world problems.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMePage;
