import React from "react"
import Links from "./Links"

function About({ bio, links }) {
  console.log(bio);
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={links.linkedin} github={links.github} />
    </div>
  )
}

export default About
