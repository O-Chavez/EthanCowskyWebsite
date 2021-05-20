import React, {useState} from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Landing.css"

export default function Landing() {

  const [hovered, setHovered] = useState("");

  let TOP_LEFT = {
    backgroundImage: "url('https://d147gc4b3ckpsg.cloudfront.net/filters:quality(100)/fit-in/1200x800/filters:format(jpeg)/uploads/we have been waiting for you.png')"
    // clipPath: "polygon(100vw 0, 0% 100vh, 100vw 100vh)"

  }

  let BOTTOM_RIGHT = {
    backgroundImage: "url('https://d147gc4b3ckpsg.cloudfront.net/filters:quality(100)/fit-in/1200x800/filters:format(jpeg)/uploads/hi mom.png')",
    clipPath: "polygon(100vw 0, 0% 100vh, 100vw 100vh)"
  }

  let BOTTOM_CENTER = {
    backgroundImage: "url('https://d147gc4b3ckpsg.cloudfront.net/filters:quality(100)/fit-in/1200x800/filters:format(jpeg)/uploads/statues.jpg')",
    clipPath: "polygon(100vw 0, 50% 50vh, 100vw 100vh)",
  }
 
  return (
    <div className="landing">
      <div 
      style={TOP_LEFT} 
      className={`wallpaper topLeft ${hovered === "Ethan Cowsky Image Gallery" ? "zoom" : ''}`}>
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
      className={`wallpaper bottomCenter ${hovered === "My Instagram" ? "zoom" : ''}`}>
        <ul className="slideshow3">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      
        <NavLink 
          to="/contact"
          className={`boxes contactMe ${hovered === "Contact Me" ? 'hovered' : ''}`} 
          onMouseEnter={e => setHovered(e.target.innerText)} 
          onMouseLeave={e => setHovered("")}
          >Contact Me
        </NavLink>
      

      
        <a
        href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" 
        rel="noreferrer" 
          className={`boxes myWork ${hovered === "My Instagram" ? 'hovered' : ''}`} 
          onMouseEnter={e => setHovered(e.target.innerText)} 
          onMouseLeave={e => setHovered("")}
          >My Instagram
        </a>



        <NavLink
          to="/mywork"
          className={`boxes logo ${hovered === 'Ethan Cowsky Image Gallery' ? "hovered" : ''}`}
          onMouseEnter={e => setHovered(e.target.innerText)} 
          onMouseLeave={e => setHovered("")}
          >Ethan Cowsky Image Gallery
        </NavLink>
      
    
      

      <Link to="/admin" className="adminLink">Admin</Link>
    </div>
  )
}
