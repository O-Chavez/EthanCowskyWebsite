import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    
    <nav className="landingNav navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid mx-5">
        <Link 
        to="/"
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
    
  )
}
