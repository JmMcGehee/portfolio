import React from 'react'
import Nav from './Nav'
import LinkedIn from './LinkedIn'
import Resume from './Resume'
import GitHub from './GitHub'

function Bio() {
  return (
    <div>
      <Nav />
    <div id="bio">
      <div className="about-me">
        <h1>About Me</h1>
        <img src="https://media.licdn.com/dms/image/C4E03AQGY8QMDeT_nNw/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=5b7pCcytTA6HKBb-zJGZbtMgz4nDGPbViFsJEaktRBk" alt="JoshuaMcgehee"/>
        <h2>Joshua McGehee</h2>
        <p>I am a Software Developer and a shameless collaborator. My passion for learning and my entrepreneurial curiosity have led me to seek a deep understanding of all facets of organizational operations. As a serial team-builder over the last 5 years, I have been a top-performer, coach, team-manager, and organization builder. Now I combine my technical skills with my comprehensive perspective to uncover and explain problems and solutions to stakeholders that would otherwise be missed or misunderstood. </p>
<p>
  My greatest passions lie in developing digital tech to advance the fight against climate change, the understanding of STEM fields, and the exploration of space. </p>


      </div>
      <div className="section">
        <div className="links">
          <ul>
            <li><LinkedIn /></li>
            <li><GitHub /></li>
            <li><Resume /></li>
          </ul>
        </div>
        {/* <div className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            <h5>JavaScript</h5>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>SASS</h5>
            <h5>jQuery</h5>
            <h5>AJAX</h5>
            <h5>Express</h5>
            <h5>REST API</h5>
            <h5>MongoDB</h5>
            <h5>Auth</h5>
            <h5>React</h5>
            <h5>Ruby</h5>
            <h5>Ruby on Rails</h5>
            <h5>PostgresSQL</h5>
            <h5>Git</h5>
            <h5>GitHub</h5>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default Bio
