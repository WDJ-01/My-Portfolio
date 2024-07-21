import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./home.css";
import Socials from "../../icons/socials";

export const Home = () => {
  const homeRef = useNav("Home");

  return (
    <section ref={homeRef} id="homeContainer">
      <div className="home_div">
        <h1>Hello,</h1>
        <h1 id="accent_color">I'm Wian,</h1>
        <h1>FullStack Developer</h1>
        <p>Web/Xamarin/API's</p>
        <button className="home_btn">
          <a
            className="resume_link"
            href={require("../../resources/resume/resume.pdf")}
            target="_blank"
          >
            My Resume
          </a>
        </button>
        <Socials />
      </div>
    </section>
  );
};
