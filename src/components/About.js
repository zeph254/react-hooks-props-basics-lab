import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this!</p>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <link>{props.github}</link>
      <link>{props.linkedin}</link>
    </div>
  );
}


class About extends React.Component {  
  render() {  
    const { bio } = this.props; // Destructure the bio prop from props  

    return (  
      <div>  
        <h1>About Me</h1>  
        {/* Conditional rendering: only display <p> if bio is truthy (not empty or undefined) */}  
        {bio && bio.trim() ? <p>{bio}</p> : null}  
      </div>  
    );  
  }  
}  





export default About;
