import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Harshit Sharma</h2>
        <hr style={{color:"#292929", width:"80%"}}/>
        <div className="prompt">
          <p>Solution-oriented and problem solver with keen interest in learning new skills and exploring real life solutions. Professionally skilled in communication, collaboration, and technical documentation. Special interest in achieving the target and helping with strategy planning</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Dev-Skills</h2>
            <span>
              ReactJS, Redux, HTML, CSS, GitHub, NPM, MongoDB, EJS, PUG, Javascript, 
              Git, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, NodeJS, ExpressJS,
            </span>
          </li>
          <li className="item">
            <h2>Soft-Skills</h2>
            <span>
              Networking, Collaboration, Adaptibility, Persistence
              <br />
              Work Ethics, Leadership
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;