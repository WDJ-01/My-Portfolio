import React, { Component } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

export class Socials extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <button
          className="btn_social"
          style={{
            backgroundColor: "#004182",
            border: "none",
            marginTop: "1rem",
            width: "2.375rem",
            height: "2.375rem",
            padding: "0",
            borderRadius: "50%",
          }}
        >
          {" "}
          <a
            href="https://www.linkedin.com/in/wian-de-jager/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TfiLinkedin style={{ color: "white", fontSize: "1rem" }} />{" "}
          </a>
        </button>
        <button
          className="btn_social"
          style={{
            backgroundColor: "black",
            border: "none",
            marginTop: "1rem",
            marginLeft: "1rem",
            width: "2.375rem",
            height: "2.375rem",
            padding: "0",
            borderRadius: "50%",
          }}
        >
          <a
            href="https://github.com/WDJ-01"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <FaGithub
              style={{
                color: "white",
                fontSize: "1rem",
              }}
            />
          </a>
        </button>
        <button
          className="btn_social"
          style={{
            backgroundColor: "blue",
            border: "none",
            marginTop: "1rem",
            marginLeft: "1rem",
            width: "2.375rem",
            height: "2.375rem",
            padding: "0",
            borderRadius: "50%",
          }}
        >
          {" "}
          <a
            href="https://www.facebook.com/wian.dejager.921/"
            target="_blank"
            rel="noreferrer noopener"
          >          <FaFacebook style={{ color: "white", fontSize: "1rem" }} />
          </a>
        </button>{" "}
      </div>
    );
  }
}

export default Socials;
