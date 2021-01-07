import React, {useState} from 'react'
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

  const CONTACT_ME = {
    bottom: "12%",
    left: "45%",
  }

  const MY_WORK = {
    right: "10%",
    top: "50%",
  }

  const LOGO = {
    left: "15%",
    top: "20%",
  }
  

  return (
    <div className="landing">
      <div 
      style={TOP_LEFT} 
      className={`wallpaper topLeft ${hovered === "Ethan Cowsky Photography" ? "zoom" : ''}`}></div>
      <div 
      style={BOTTOM_RIGHT} 
      className={`wallpaper bottomRight ${hovered === "Contact Me" ? "zoom" : ''}`}></div>
      <div 
      style={BOTTOM_CENTER} 
      className={`wallpaper bottomCenter ${hovered === "My Work" ? "zoom" : ''}`}></div>

      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-auto" href="#">
            Ethan Cowsky
          </a>
          <a href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" className="nav-link text-white fs-4">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </nav>

      <div>
        <button style={CONTACT_ME} 
        className={`boxes ${hovered === "Contact Me" ? 'hovered' : ''}`} 
        onMouseEnter={e => setHovered(e.target.innerText)} 
        onMouseLeave={e => setHovered("")}
        >Contact Me</button>
      </div>

      <div>
      <button style={MY_WORK} 
      className={`boxes ${hovered === "My Work" ? 'hovered' : ''}`} 
      onMouseEnter={e => setHovered(e.target.innerText)} 
      onMouseLeave={e => setHovered("")}
      >My Work</button>
      </div>

      <div >
        <button
        style={LOGO} 
        className={`boxes ${hovered === 'Ethan Cowsky Photography' ? "hovered" : ''}`} 
        onMouseEnter={e => setHovered(e.target.innerText)} 

        onMouseLeave={e => setHovered("")}
        >   Ethan Cowsky Photography
            
        </button>
      </div>
    </div>
  )
}
