import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  photography
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
import Photography from "./components/home/Photography.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experiences.show && (
        <Experience experiences={experiences} />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          softwareSkills={skills.softwareSkills}
          programmingSkills={skills.programmingSkills}
          fabricationSkills={skills.fabricationSkills}
        />
      )}
      {photography.show && (
        <Photography
          heading={photography.heading}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <Router>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </Router>
  );
};

export default App;
