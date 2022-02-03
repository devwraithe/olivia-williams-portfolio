// imports
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Layout from "../../components/layout/layout";
import "./about.scss";

function HobbyTab() {
  return (
    <div className="tabs__tab">
      <p className="tabs__tabWrapper">
        Whenever i'm not working, I'm spending time with my family and friends,
        playing board games and travelling together. I enjoy meeting new people
        and playing football.
      </p>
    </div>
  );
}

function ResumeTab() {
  return (
    <div className="tabs__tab">
      <p className="tabs__tabWrapper">
        If you'd like to see more information about my background, skills and
        accomplishments, you can download my resume by cliking on the button
        below...
      </p>
      <button className="tabs__tabBtn tabs__tabBtn--hover">
        Download Resume
      </button>
    </div>
  );
}

// component
function About() {
  const [activeTab, setActiveTab] = useState("hobbyTab");

  const handleHobbyTab = () => {
    setActiveTab("hobbyTab");
  };
  const handleResumeTab = () => {
    setActiveTab("resumeTab");
  };

  return (
    <div
      className="about"
      onLoad={document
        .querySelector("body")
        .classList.remove("no-overlayScroll")}
    >
      <Navbar />
      <Layout>
        <header className="header">
          <div className="header__wrapper">
            <h3 className="header__title">About Me</h3>
            <h4 className="header__subtitle">Empathetic. Fun. Discerning.</h4>
          </div>
        </header>

        {/* tabs */}
        <div className="tabs">
          <div className="tabs__nav">
            <div
              className={activeTab === "hobbyTab" ? "active" : ""}
              onClick={handleHobbyTab}
            >
              Hobbies
            </div>
            <div
              className={activeTab === "resumeTab" ? "active" : ""}
              onClick={handleResumeTab}
            >
              Resume
            </div>
          </div>
          <div className="tabs__outlet">
            {activeTab === "hobbyTab" ? <HobbyTab /> : <ResumeTab />}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

// export component
export default About;
