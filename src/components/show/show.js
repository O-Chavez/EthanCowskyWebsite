import React from 'react';
import { Link } from "react-router-dom";
import "./show.css";

export default function show() {
  return (
    <div className="show">
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
    
    <div className="showContent container">

        <Link to="/mywork" className="backArrow text-center">
          <i class="fas fa-arrow-left"></i>
        </Link>
      
      
      <div className="mainImage">
          <div className="imgCover">
              
                <h5 className="title">Adipisicing consequat veniam adipisicing anim et id do aute eu ipsum est ullamco.</h5>
              
              <div className="description">
                <p>
                  loremQui do quis dolor ipsum amet esse. Laborum minim consequat id enim dolor enim quis mollit excepteur ad esse nulla aute. Ullamco officia fugiat eiusmod cillum nulla. Est tempor laborum amet do ipsum ipsum voluptate nostrud sunt deserunt eiusmod. Amet reprehenderit id nostrud ipsum Lorem duis aliquip laboris. Ea eu cillum aliqua dolor dolore sunt. Mollit ipsum incididunt anim officia anim.
                </p>
              </div>
            
          </div>

        </div>
        <hr></hr>

      <div className="buyBanner">
        <div className="buyInfo">
          <p>Nulla velit ipsum est commodo ullamco mollit.</p>
        </div>
        
        <Link 
            to="#" 
            className="buyBtn text-center">
              Buy 
              <br></br>
            <i class="fab fa-cc-paypal"></i>
        </Link>
      </div>

      
    </div>
    

      


      
    </div>
  )
}
