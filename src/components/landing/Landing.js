import React, {useState} from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Landing.css"

export default function Landing() {

  const [hovered, setHovered] = useState("");

  let TOP_LEFT = {
    backgroundImage: "url('https://d147gc4b3ckpsg.cloudfront.net/filters:quality(40)/filters:format(jpeg)/uploads/We Have Been Waiting For You.png')",
    // clipPath: "polygon(100vw 0, 0% 100vh, 100vw 100vh)"
  }

  let BOTTOM_RIGHT = {
    backgroundImage: "url('https://d147gc4b3ckpsg.cloudfront.net/filters:quality(40)/filters:format(jpeg)/uploads/Hi Mom.png')",
    clipPath: "polygon(100vw 0, 0% 100vh, 100vw 100vh)"
  }

  let BOTTOM_CENTER = {
    backgroundImage: "url('https://d147gc4b3ckpsg.cloudfront.net/filters:quality(40)/filters:format(jpeg)/uploads/Finally Back.png')",
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

      <Link to="/admin" className="adminLink">Admin</Link>
    </div>
  )
}
