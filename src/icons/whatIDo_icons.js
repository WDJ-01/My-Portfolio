import React, { Component } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGit,
  FaNodeJs,
  FaAngular,
  FaMicrosoft,
  FaDocker
} from "react-icons/fa";
import {AiOutlineConsoleSql} from "react-icons/ai"
import { SiXaml,SiXamarin,SiJavascript, SiRedux, SiWebpack, SiTypescript,  } from "react-icons/si";

export class Icons extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="tooltip">
          {" "}
          <FaHtml5
            style={{ color: "green", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">HTML5</span>
        </div>
        <div className="tooltip">
          {" "}
          <FaCss3Alt
            style={{ color: "blue", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext"> CSS3</span>
        </div>
        <div className="tooltip">
          {" "}
          <SiJavascript
            style={{ color: "yellow", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">JavaScript</span>
        </div>{" "}
        <div className="tooltip">
          {" "}
          <SiTypescript
            style={{ color: "darkblue", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">TypeScript</span>
        </div>
        <div className="tooltip">
          {" "}
          <p   style={{
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "0 1rem 0 0",
            }}>C#</p>
          <span className="tooltiptext">C-Sharp</span>
        </div>
        <div className="tooltip">
          {" "}
          <p   style={{
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "0 1rem 0 0",
            }}>.NET</p>
          <span className="tooltiptext">.NET Core</span>
        </div>
        <div className="tooltip">
                    <SiXamarin 
                      style={{
                        color: "blue",
                        fontSize: "2rem", marginRight: "1rem"
                      }}
                    />
                    <span className="tooltiptext">Xamarin</span>
                  </div>
                  <div className="tooltip">
                    <SiXaml 
                      style={{
                        color: "black",
                        fontSize: "2rem",marginRight: "1rem"
                      }}
                    />
                    <span className="tooltiptext">XAML</span>
                  </div>
        <div className="tooltip">
          {" "}
          <FaMicrosoft
            style={{
              color: "black",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          />
          <span className="tooltiptext">.NET</span>
        </div>
        <div className="tooltip">
          {" "}
          <FaAngular
            style={{
              color: "#dd1b16",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          />
          <span className="tooltiptext">Angular</span>
        </div>
        <div className="tooltip">
          {" "}
          <FaReact
            style={{
              color: "lightblue",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          />
          <span className="tooltiptext">React</span>
        </div>{" "}
        <div className="tooltip">
          {" "}
          <SiRedux
            style={{ color: "purple", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">Redux</span>
        </div>{" "}
        <div className="tooltip">
          {" "}
          <AiOutlineConsoleSql
            style={{ color: "black", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">SQl</span>
        </div>
        <div className="tooltip">
          {" "}
          <FaGithub
            style={{ color: "black", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">Github</span>
        </div>{" "}
        <div className="tooltip">
          {" "}
          <FaGit
            style={{ color: "black", fontSize: "2rem", marginRight: "1rem" }}
          />
          <span className="tooltiptext">Git</span>
        </div>
        <div className="tooltip">
          <FaNodeJs
            style={{
              color: "lightgreen",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          />
          <span className="tooltiptext">Node.js</span>
        </div>
        <div className="tooltip">
          <SiWebpack
            style={{
              color: "lightblue",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          />
          <span className="tooltiptext">Webpack</span>
        </div>
        <div className="tooltip">
                    <FaDocker 
                      style={{
                        color: "lightblue",
                        fontSize: "2rem",
                      }}
                    />
                    <span className="tooltiptext">Docker</span>
                  </div>
      </div>
    );
  }
}

export default Icons;
