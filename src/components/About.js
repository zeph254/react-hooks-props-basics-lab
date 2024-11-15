import React from "react";
import Links from "./Links";

function About({ bio, githubLink, linkedinLink }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={githubLink} linkedin={linkedinLink} />
    </div>
  );
}


export default About;
