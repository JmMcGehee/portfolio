import React from 'react'
import Nav from './Nav'
import LinkedIn from './LinkedIn'
import Resume from './Resume'
import GitHub from './GitHub'

function Bio() {
  return (
    <div id="bio">
      <Nav />
      <div className="about-me">
        <h1>About Me</h1>
        <img src="https://media.licdn.com/dms/image/C4E03AQGY8QMDeT_nNw/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=5b7pCcytTA6HKBb-zJGZbtMgz4nDGPbViFsJEaktRBk" alt="JoshuaMcgehee"/>
        <h4>Joshua McGehee</h4>
        <p>I am a Software Developer and a shameless collaborator. My passion for learning and my entrepreneurial curiosity have led me to seek a deep understanding of all facets of organizational operations. As a serial team-builder over the last 5 years, I have been a top-performer, coach, team-manager, and organization builder. Now I combine my technical skills with my comprehensive perspective to uncover and explain problems and solutions to stakeholders that would otherwise be missed or misunderstood. <br/>

  My greatest passions lie in developing digital tech to advance the fight against climate change, the understanding of STEM fields, and the exploration of space. </p>

        <div className="links">
          <LinkedIn />
          <Resume />
          <GitHub />
        </div>
      </div>
    </div>
  )
}

export default Bio
