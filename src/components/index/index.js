import React from 'react';
import { Link } from "react-router-dom";

import "./index.css";

import PhotoCard from "./PhotoCard"

export default function index() {
  return (
    <div className="index">

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

      <div className="container d-flex photos">
        
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />

      </div>
    </div>
  )
}
