import React from 'react'
import Nav from './Nav'

function Projects() {
  return ( <
    div >
    <
    Nav / >
    <
    h1 > Projects Page < /h1> <
    div id = "project-container" >
    <
    div class = "project" >
    <
    div class = "live-site" >
    <
    h3 > Live Green Outdoors: Chicago < /h3> <
    iframe src = "https://jmmcgehee.github.io/LiveGreenOutdoorsChicago/"
    frameborder = "0" > < /iframe> <
    p > Single Page App built with jQuery, AJAX, and Google Maps API < /p> <
    /div> <
    div class = "live-site" >
    <
    h3 > Pollinator Haven < /h3> <
    iframe src = "https://pollinatorhaven.herokuapp.com/"
    frameborder = "0" > < /iframe> <
    p > Full CRUD App built with MongoDB, Express, and Node.Auth included < /p> <
    /div> <
    div class = "live-site" >
    <
    h3 > Real Talk < /h3> <
    iframe src = "https://matloc13.github.io/real_talk/"
    frameborder = "0" > < /iframe> <
    p > Team built single page MERN app whith DraftJS < /p> <
    /div> <
    div class = "live-site" >
    <
    h3 > PlowShare < /h3> <
    iframe src = "https://jmmcgehee.github.io/PlowShare_frontend/"
    frameborder = "0" > < /iframe> <
    p > SPA build with PostgreSQL, Ruby on Rails, and React < /p> <
    /div> <
    div class = "live-site" >
    <
    h3 > VPN server < /h3> <
    iframe src = "https://jmmcgehee.github.io/VPN_server/"
    frameborder = "0" > < /iframe> <
    p > GitHub markdown on how to set up a VPN
    for remote access using a Raspberry Pi, OpenVPN, and Tunnelblick < /p> <
    /div> <
    /div> <
    /div> <
    /div>
  )
}

export default Projects
