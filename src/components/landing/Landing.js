import React, {useState} from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Landing.css"

export default function Landing() {

  const [hovered, setHovered] = useState("");

  let TOP_LEFT = {
    backgroundImage: "url('https://images.unsplash.com/photo-1496000844600-c1bb7d704835?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    // clipPath: "polygon(100vw 0, 0% 100vh, 100vw 100vh)"
  }

  let BOTTOM_RIGHT = {
    backgroundImage: "url('https://images.unsplash.com/photo-1471009544976-30d2142adb6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80')",
    clipPath: "polygon(100vw 0, 0% 100vh, 100vw 100vh)"
  }

  let BOTTOM_CENTER = {
    backgroundImage: "url('https://images.unsplash.com/photo-1495306765622-7639a965c271?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')",
    clipPath: "polygon(100vw 0, 50% 50vh, 100vw 100vh)",
  }
 
  return (
    <div className="landing">
      <div 
      style={TOP_LEFT} 
      className={`wallpaper topLeft ${hovered === "Ethan Cowsky Photography" ? "zoom" : ''}`}>
      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
      <div 
      style={BOTTOM_RIGHT} 
      className={`wallpaper bottomRight ${hovered === "Contact Me" ? "zoom" : ''}`}>
        <ul className="slideshow2">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div 
      style={BOTTOM_CENTER} 
      className={`wallpaper bottomCenter ${hovered === "My Work" ? "zoom" : ''}`}>
        <ul className="slideshow3">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <nav className="landingNav navbar navbar-dark bg-dark">
      <div className="container-fluid mx-5">
        <Link to="/"
          className="navbar-text text-white w-30 my-auto">
          Ethan Cowsky
        </Link>
          <a 
            href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" rel="noreferrer" 
            className="fs-4 text-white w-30">
              <i className="fab fa-instagram"></i>
          </a>
          <p 
            className="navbar-text text-white w-30 my-auto">
            3D Rendering
          </p>
      </div>
  </nav>

      <div>
        <button 
          className={`boxes contactMe ${hovered === "Contact Me" ? 'hovered' : ''}`} 
          onMouseEnter={e => setHovered(e.target.innerText)} 
          onMouseLeave={e => setHovered("")}
          >Contact Me
        </button>
      </div>

      <div>
        <NavLink
          to="/mywork"
          className={`boxes myWork ${hovered === "My Work" ? 'hovered' : ''}`} 
          onMouseEnter={e => setHovered(e.target.innerText)} 
          onMouseLeave={e => setHovered("")}
          >My Work
        </NavLink>
      </div>

      <a href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" 
      rel="noreferrer" 
        className={`boxes logo ${hovered === 'Ethan Cowsky Photography' ? "hovered" : ''}`} 
        onMouseEnter={e => setHovered(e.target.innerText)} 
        onMouseLeave={e => setHovered("")}
        >Ethan Cowsky Photography
        <div className={`text-center ${hovered === 'Ethan Cowsky Photography' ? "shown" : 'hidden'} `}>
          <a 
            className="nav-link text-white fs-4">
            Instagram <i className="fab fa-instagram"></i>
          </a>
        </div>
      </a>
    </div>
  )
}
