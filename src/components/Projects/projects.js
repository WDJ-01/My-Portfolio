import React from "react";
import { useNav } from "../../customHooks/useNav";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaBootstrap,
  FaMicrosoft,
  FaReact
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiRedux, SiWebpack } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import "./projects.css";

const style = { fontSize: "1.5rem", color: "white" };

export const Projects = () => {
  const projectsRef = useNav("Projects");

  return (
    <section ref={projectsRef} id="projectsContainer">
      <div className="projects_heading">
        <h2>Portfolio</h2>
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
            <div className="project_png">
              <img
                src={require("../../resources/images/project7.png").default}
              />
            </div>
            <h3>FitX Ecom</h3>
            <div className="project_skills_used">
              <h4>Skills Used</h4>
              <ul className="skills_list">
                {/* <li>HTML&nbsp;</li>
                <li>| CSS&nbsp;</li>
                <li>| JavaScript&nbsp;</li>
                <li>| TypeScript&nbsp;</li>
                <li>| Sql Server&nbsp;</li>
                <li>| C#&nbsp;</li>
                <li>| Angular&nbsp;</li>
                <li>| .Net Framework&nbsp;</li>
                <li>| Bootstrap&nbsp;</li> */}
                <li>
                  <div className="tooltip">
                    <FaHtml5
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaCss3Alt
                      style={{
                        color: "blue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">CSS</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <DiJavascript1
                      style={{
                        color: "yellow",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiTypescript
                      style={{
                        color: "darkblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">TypeScript</span>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="tooltip">
                    C#
                    <span className="tooltiptext">C-Sharp</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaAngular
                      style={{
                        color: "#dd1b16",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Angular</span>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="tooltip">
                    <AiOutlineConsoleSql
                      style={{
                        color: "  black",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">SQL</span>
                  </div>
                </li>
                <li>
                <div className="tooltip">

                  <FaBootstrap
                    style={{
                      color: "  #563d7c",
                      fontSize: "2rem",
                    }}
                  />
                    <span className="tooltiptext">Bootstrap</span>
                  </div>
                </li>
                <li>
                <div className="tooltip">

                  <FaMicrosoft
                    style={{
                      color: "black",
                      fontSize: "2rem",
                    }}
                  />
                    <span className="tooltiptext">.Net</span>
                  </div>
                </li>
              </ul>
            </div>
            <p>
              Fully functional ecommerse store linked to database and connected
              with asp.net api to angular.
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">
              <a
                href="https://angular-ecom.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Demo
              </a>
            </button>
            <button id="see_code">
              <a
                href="https://github.com/WDJ-01/FitX-Ecom"
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
            <div className="project_png">
              <img
                src={require("../../resources/images/project1.png").default}
              />
            </div>
            <h3>Outdoor Gear Store</h3>
            <div className="project_skills_used">
              <h4>Skills Used</h4>
              <ul className="skills_list">
                {/* <li>HTML&nbsp;</li>
                <li>| CSS&nbsp;</li>
                <li>| JavaScript&nbsp;</li>
                <li>| TypeScript&nbsp;</li>
                <li>| Sql Server&nbsp;</li>
                <li>| C#&nbsp;</li>
                <li>| Angular&nbsp;</li>
                <li>| .Net Framework&nbsp;</li>
                <li>| Bootstrap&nbsp;</li> */}
                <li>
                  <div className="tooltip">
                    <FaHtml5
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaCss3Alt
                      style={{
                        color: "blue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">CSS</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <DiJavascript1
                      style={{
                        color: "yellow",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaReact
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">React</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiRedux
                      style={{
                        color: "purple",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Redux</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiWebpack
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Webpack</span>
                  </div>
                </li>

              </ul>
            </div>

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
            <div className="project_png">
              <img
                src={require("../../resources/images/project2.png").default}
              />
            </div>
            <h3>Reddit Lite</h3>
            <div className="project_skills_used">
              <h4>Skills Used</h4>
              <ul className="skills_list">
                {/* <li>HTML&nbsp;</li>
                <li>| CSS&nbsp;</li>
                <li>| JavaScript&nbsp;</li>
                <li>| TypeScript&nbsp;</li>
                <li>| Sql Server&nbsp;</li>
                <li>| C#&nbsp;</li>
                <li>| Angular&nbsp;</li>
                <li>| .Net Framework&nbsp;</li>
                <li>| Bootstrap&nbsp;</li> */}
                <li>
                  <div className="tooltip">
                    <FaHtml5
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaCss3Alt
                      style={{
                        color: "blue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">CSS</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <DiJavascript1
                      style={{
                        color: "yellow",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaReact
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">React</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiRedux
                      style={{
                        color: "purple",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Redux</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiWebpack
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Webpack</span>
                  </div>
                </li>

              </ul>
            </div>
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
            <div className="project_png">
              <img
                src={require("../../resources/images/project3.png").default}
              />
            </div>
            <h3>Developer Portfolio</h3>
            <div className="project_skills_used">
              <h4>Skills Used</h4>
              <ul className="skills_list">
                {/* <li>HTML&nbsp;</li>
                <li>| CSS&nbsp;</li>
                <li>| JavaScript&nbsp;</li>
                <li>| TypeScript&nbsp;</li>
                <li>| Sql Server&nbsp;</li>
                <li>| C#&nbsp;</li>
                <li>| Angular&nbsp;</li>
                <li>| .Net Framework&nbsp;</li>
                <li>| Bootstrap&nbsp;</li> */}
                <li>
                  <div className="tooltip">
                    <FaHtml5
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaCss3Alt
                      style={{
                        color: "blue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">CSS</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <DiJavascript1
                      style={{
                        color: "yellow",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaReact
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">React</span>
                  </div>
                </li>
       
                <li>
                  <div className="tooltip">
                    <SiWebpack
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Webpack</span>
                  </div>
                </li>

              </ul>
            </div>
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
            <div className="project_png">
              <img
                src={require("../../resources/images/project4.png").default}
              />
            </div>
            <h3>ToDo App</h3>
            <div className="project_skills_used">
              <h4>Skills Used</h4>
              <ul className="skills_list">
                {/* <li>HTML&nbsp;</li>
                <li>| CSS&nbsp;</li>
                <li>| JavaScript&nbsp;</li>
                <li>| TypeScript&nbsp;</li>
                <li>| Sql Server&nbsp;</li>
                <li>| C#&nbsp;</li>
                <li>| Angular&nbsp;</li>
                <li>| .Net Framework&nbsp;</li>
                <li>| Bootstrap&nbsp;</li> */}
                <li>
                  <div className="tooltip">
                    <FaHtml5
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaCss3Alt
                      style={{
                        color: "blue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">CSS</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <DiJavascript1
                      style={{
                        color: "yellow",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaReact
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">React</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiRedux
                      style={{
                        color: "purple",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Redux</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiWebpack
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Webpack</span>
                  </div>
                </li>

              </ul>
            </div>
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

        <div className="projects_gallery_child">
          <div className="projects_gallery_child_content">
            <div className="project_png">
              <img
                src={require("../../resources/images/project6.png").default}
              />
            </div>
            <h3>Company Website</h3>
            <div className="project_skills_used">
              <h4>Skills Used</h4>
              <ul className="skills_list">
                {/* <li>HTML&nbsp;</li>
                <li>| CSS&nbsp;</li>
                <li>| JavaScript&nbsp;</li>
                <li>| TypeScript&nbsp;</li>
                <li>| Sql Server&nbsp;</li>
                <li>| C#&nbsp;</li>
                <li>| Angular&nbsp;</li>
                <li>| .Net Framework&nbsp;</li>
                <li>| Bootstrap&nbsp;</li> */}
                <li>
                  <div className="tooltip">
                    <FaHtml5
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaCss3Alt
                      style={{
                        color: "blue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">CSS</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <DiJavascript1
                      style={{
                        color: "yellow",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <FaReact
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">React</span>
                  </div>
                </li>
                <li>
                  <div className="tooltip">
                    <SiWebpack
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Webpack</span>
                  </div>
                </li>

              </ul>
            </div>
            <p>
              Stylish, gallery style website inspired by SpaceX's website.
              Appealing, modern design for company.{" "}
            </p>
          </div>
          <div className="projects_gallery_child_btn">
            <button id="see_demo">
              <a
                href="https://gallerystylewebsite.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Demo
              </a>
            </button>
            <button id="see_code">
              <a
                href="https://github.com/WDJ-01/Website-Design-gallery-type-"
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
