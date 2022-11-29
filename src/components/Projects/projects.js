import React from "react";
import { useNav } from "../../customHooks/useNav";
// import {place_holder} from '../../resources/images';

export const Projects = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const projectsRef = useNav("Projects");

  return (
    <section ref={projectsRef} id="projectsContainer">
      <div className="projects_heading">
        <h2>Projects</h2>
        <p>
          Here you can find some of my work. Click Demo for a live version and
          Github to see code.
        </p>
      </div>
      <div className="projects_gallery">
        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>Notepad App</h3>
            <p>
              A Notepad App tp get track of daily last will keeping your info
              confidential
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">See Demo</button>
            <button id="see_code">See Code</button>
          </div>
        </div>

        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>Reddit Lite</h3>
            <p>
              A primitive version of Reddit called Reddit Lite. Built using the
              unofficial Reddit API.
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">See Demo</button>
            <button id="see_code">See Code</button>
          </div>
        </div>

        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>Notepad App</h3>
            <p>
              A Notepad App tp get track of daily last will keeping your info
              confidential
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">See Demo</button>
            <button id="see_code">See Code</button>
          </div>
        </div>

        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>Notepad App</h3>
            <p>
              A Notepad App tp get track of daily last will keeping your info
              confidential
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">See Demo</button>
            <button id="see_code">See Code</button>
          </div>
        </div>
      </div>
    </section>
  );
};
