import React from "react";
import { useNav } from "../../customHooks/useNav";

export const Home = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const homeRef = useNav("Home");

  return (
    <section ref={homeRef} id="homeContainer">
      <div className="home_div">
        <h1>Hello,</h1>
        <h1 id="accent_color">I'm Wian,</h1>
        <h1>Frontend Developer</h1>
        <p>Web Developer</p>
        <button className="home_btn">Resume</button>
      </div>
    </section>
  );
};

