import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    
    <nav className="landingNav navbar navbar-dark bg-dark sticky-top" id={'index'}>
      <div className="container-fluid d-flex mx-5" style={{justifyContent: "space-between"}}>
          <a 
            href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" rel="noreferrer" 
            className="fs-4 text-white w-30" style={{width: "3em"}}>
              <i className="fab fa-instagram"></i>
          </a>
          <a 
          href="#landing"
          className="navbar-text text-white w-30 my-auto" >
          Ethan Cowsky
        </a>
          <Link 
            to="/contact"
            className="navbar-text text-white w-30 my-auto">
            Contact
          </Link>
      </div>
  </nav>
    
  )
}
