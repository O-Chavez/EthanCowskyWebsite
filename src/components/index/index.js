import React from 'react';
import { Link } from "react-router-dom";

import "./index.css";

import PhotoCard from "./PhotoCard"

export default function index() {
  return (
    <div className="index">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand h1">
                Ethan Cowsky
          </Link>
          <a href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" rel="noreferrer" className="nav-link text-white fs-4">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </nav>

      <div className="container d-flex photos">
        
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />

      </div>
    </div>
  )
}
