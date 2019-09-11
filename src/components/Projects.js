import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="projects">
  <Nav />
  <h1>Projects</h1>{" "}
  <div id="project-container">
    <div class="project">
      <div class="live-site">
        <h3> Live Green Outdoors: Chicago </h3>{" "}
        <iframe
          src="https://jmmcgehee.github.io/LiveGreenOutdoorsChicago/"
          frameborder="0"
        >
          {" "}
        </iframe>{" "}
        <p> Single Page App built with jQuery, AJAX, and Google Maps API </p>{" "}
        <ul>
          <li><a href="https://jmmcgehee.github.io/LiveGreenOutdoorsChicago/">Live Site</a></li>
          <li><a href="https://github.com/JmMcGehee/LiveGreenOutdoorsChicago">GitHub</a></li>
        </ul>
        {/* <a href="https://jmmcgehee.github.io/LiveGreenOutdoorsChicago/">Live Site</a><br/>

        <a href="https://github.com/JmMcGehee/LiveGreenOutdoorsChicago">GitHub</a> */}
      </div>{" "}
      <div class="live-site">
        <h3> Pollinator Haven </h3>{" "}
        <iframe src="https://pollinatorhaven.herokuapp.com/" frameborder="0">
          {" "}
        </iframe>{" "}
        <p>
          {" "}
          Full CRUD App built with MongoDB, Express, and Node.Auth included{" "}
        </p>{" "}
        <ul>
          <li><a href="https://pollinatorhaven.herokuapp.com/">Live Site</a></li>
          <li><a href="https://github.com/JmMcGehee/pollinator_haven">GitHub</a></li>
        </ul>


        {/* <a href="https://pollinatorhaven.herokuapp.com/">Live Site</a><br/>
        <a href="https://github.com/JmMcGehee/pollinator_haven">GitHub</a> */}
      </div>{" "}
      <div class="live-site">
        <h3> Real Talk </h3>{" "}
        <iframe src="https://matloc13.github.io/real_talk/" frameborder="0">
          {" "}
        </iframe>{" "}
        <p> Team built single page MERN app whith DraftJS </p>{" "}
        <ul>
          <li><a href="https://matloc13.github.io/real_talk/">Live Site</a></li>
          <li><a href="https://github.com/matloc13/real_talk">GitHub: Front-End</a></li>
        </ul>

        {/* <a href="https://matloc13.github.io/real_talk/">Live Site</a><br/>
        <a href="https://github.com/matloc13/real_talk">GitHub: Front-End</a> */}
      </div>{" "}
      <div class="live-site">
        <h3> PlowShare </h3>{" "}
        <iframe
          src="https://jmmcgehee.github.io/PlowShare_frontend/"
          frameborder="0"
        >
          {" "}
        </iframe>{" "}
        <p> SPA build with PostgreSQL, Ruby on Rails, and React </p>{" "}
        <ul>
          <li><a href="https://jmmcgehee.github.io/PlowShare_frontend/">Live Site</a></li>
          <li><a href="https://github.com/JmMcGehee/PlowShare_frontend">GitHub: Front-End</a></li>
          <li><a href="https://github.com/JmMcGehee/PlowShare_backend">GitHub: Back-End</a></li>
        </ul>
        {/* <a href="https://jmmcgehee.github.io/PlowShare_frontend/">Live Site</a><br/>
        <a href="https://github.com/JmMcGehee/PlowShare_frontend">GitHub: Front-End</a><br/>
        <a href="https://github.com/JmMcGehee/PlowShare_backend">GitHub: Back-End</a> */}
      </div>{" "}
      <div class="live-site">
        <h3> VPN server </h3>{" "}
        <iframe src="https://jmmcgehee.github.io/VPN_server/" frameborder="0">
          {" "}
        </iframe>{" "}
        <p>
          {" "}
          GitHub markdown on how to set up a VPN for remote access using a
          Raspberry Pi, OpenVPN, and Tunnelblick{" "}
        </p>{" "}
        <ul>
          <li><a href="https://jmmcgehee.github.io/VPN_server/">GitHub</a></li>
        </ul>

        {/* <a href="https://jmmcgehee.github.io/VPN_server/">GitHub</a> */}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</div>

  )
}

export default Projects
