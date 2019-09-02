import React from 'react'
import pdf from '../assets/JoshuaMcGehee_Resume.pdf'

function Resume() {
  return (
    <div id="resume">
      <a href={pdf} download>Click to download my resume</a>
    </div>
  )
}

export default Resume
