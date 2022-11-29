import React from "react";
import { useNav } from "../../customHooks/useNav";

export const About = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const aboutRef = useNav("About");

  return (
    <section ref={aboutRef} id="aboutContainer">
      <div className="about_me">
        <h2>About Me</h2>
        <p>
          Hello, my name is Wian. I'm a Frontend Developer based in
          Johannesburg. I became a Frontend Developer because it is a good
          balance between creative thinking and logical or analytical tought
          process.
        </p>
        <p>
          Outside of work I enjoy fitness which includes crossfit, gym and
          swimming. I am also a avid reader, reading anything from classics such
          as Goerge Orwell to more business and self development orientated
          books.
        </p>
      </div>
      <div className="about_me">
        <h2>What I Do</h2>
        <p>
          I specialize in providing a smooth user experience by creating
          responsive, dynamic and visually appealing Frontend applications while
          maintaining best practices.
        </p>
        <p>
          As a Frontend Developer I have extensive knowledge on JavaScript, CSS
          and HTML. I mostly use React.js for applications that render quickly
          and effiently and Redux as a state management library. When it comes
          to hosting my code I use Github and Git as a version control system.
        </p>
      </div>
    </section>
  );
};
