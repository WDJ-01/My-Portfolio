import React from "react";
import { useNav } from "../../customHooks/useNav";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const style = { fontSize: "1.5rem", color: "white" };

export const Projects = () => {
  const projectsRef = useNav("Projects");

  return (
    <section ref={projectsRef} id="projectsContainer">
      <div className="projects_heading">
        <h2>Projects</h2>
        <p>
          Here you can find some of my work. Click{" "}
          <strong style={{ color: "#172b4b" }}>Demo</strong> for a live version
          and <strong style={{ color: "#172b4b" }}>Github Icon</strong> to see
          code.
        </p>
      </div>

      <div className="projects_gallery">
        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>Outdoor Gear Store</h3>
            <p>
              Ecommerce store design template for outdoor apparel store. Limited
              functionality.
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">
              <a
                href="https://outdoorstore.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Demo
              </a>
            </button>
            <button id="see_code">
              <a
                href="https://github.com/WDJ-01/Outdoor-Ecommerse-Store.git"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                <FaGithub style={style} />
              </a>
            </button>
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
            <button id="see_demo">
              <a
                href="https://redditlit.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Demo
              </a>
            </button>
            <button id="see_code">
              <a
                href="https://github.com/WDJ-01/RedditClone.git"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub style={style} />
              </a>
            </button>
          </div>
        </div>

        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>Developer Portfolio</h3>
            <p>
              Front-end Developer Portfolio containing all necessary info for
              job recruiters.
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_code">
              <a href="https://github.com/WDJ-01/My-Portfolio.git">
                <FaGithub style={style} />
              </a>
            </button>
          </div>
        </div>

        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <h3>ToDo App</h3>
            <p>
              Become focused,organised and ready to meet the demands of our day
              to day life with ToDo.
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">
              <a
                href="https://t0d00.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Demo
              </a>
            </button>
            <button id="see_code">
              <a
                href="https://github.com/WDJ-01/ToDo-App.git"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub style={style} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};