import React from "react";
import { useNav } from "../../customHooks/useNav";
import { Icons } from "../../icons/whatIDo_icons";
import "./about.css";

export const About = () => {
  const aboutRef = useNav("About");

  return (
    <section ref={aboutRef} id="aboutContainer">
      <div className="about_me_1">
        <h2>About Me </h2>
        <ul className="dynamic_txt">
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Desinger</span>
          </li>
          <li>
            <span>Fitness</span>
          </li>
          <li>
            <span>Coffee</span>
          </li>
          <li>
            <span>Outdoors</span>
          </li>
        </ul>

        <p>
          Hello, my name is Wian. I'm a FullStack Developer based in
          Johannesburg. I have experience creating web applications as well as
          mobile apps using xamarin. I enjoy a challenge and working on projects
          that allow me to learn different techniques and softwares. The ability
          to create something from scratch is my createst pleasure as a
          developer.
        </p>
        <p>
          Outside of work I enjoy fitness which includes crossfit and gyming. I
          am also a avid reader, reading anything from classics such as George
          Orwell to more business and self development orientated books. In my
          free time I enjoy exploring the outdoors with friends which includes
          fishing, camping and hiking.
        </p>
      </div>
      <div className="about_me_2">
        <h2>What I Do</h2>

        <h3>FullStake Developer</h3>
        <Icons />

        <ul className="about_ul">
          <li>
            Knowledge of HTML, CSS, JavaScript, XAML, JSON, TypeScript and C#.
          </li>
          <li>React, Angular, .NET Core, Xamarin experience.</li>
          <li>
            I specialize in FullStack development with experience in building
            and maintaining applications from frontend visual to backend logic
            and connecting this with Api's and Microservices.
          </li>
          <li>Experience using Git CLI and Github as well as Fork.</li>
          <li>Build and integrate REST Api's using Node.js and C#.</li>
          <li>
            Integrate and maintain databases such as Microsoft SQL server and
            MySql.
          </li>
          <li>
            Basic understanding of Windows IIS, AWS and Azure implementation
          </li>
          <li>Experience using Docker to deploy API's</li>
        </ul>
        {/* <p>
          As a Frontend Developer I have extensive knowledge on{" "}
          <strong>JavaScript</strong>, <strong>CSS</strong> and{" "}
          <strong>HTML</strong>. I mostly use <strong>React.js</strong> for
          applications that render quickly and effiently and{" "}
          <strong>Redux</strong> as a state management library.{" "}
          <strong>Webpack</strong> is my preferred module-bundler. When it comes
          to hosting my code I use <strong>Github</strong> and{" "}
          <strong>Git</strong> as a version control system.
        </p> */}
      </div>
    </section>
  );
};
