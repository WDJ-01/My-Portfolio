import React, { Component } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGit,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiRedux , SiWebpack} from "react-icons/si";


export class Icons extends Component {
  render() {
    return (
      <div style={{display: "flex", flexWrap: 'wrap'}}>
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
      </div>
    );
  }
}

export default Icons;
