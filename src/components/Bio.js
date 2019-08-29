import React from 'react'
import Nav from './Nav'
import LinkedIn from './LinkedIn'
import Resume from './Resume'
import GitHub from './GitHub'

function Bio() {
  return (
    <div id="bio">
      <Nav />
      <h1>Bio Page</h1>
      <img src="" alt="JoshuaMcgehee"/>
      <h4>Joshua McGehee</h4>
      <p>bio</p>

      <LinkedIn />
      <Resume />
      <GitHub />
    </div>
  )
}

export default Bio
