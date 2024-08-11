import React from "react";
import Links from './Links.js'

function About(props) {
  console.log(props)
  const linkList = props.Links
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {typeof props.bio === 'string' && props.bio !== '' && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
