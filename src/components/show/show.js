import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from '../partials/Footer';

import CardFieldModal from '../stripe/CardFieldModal';

import "./show.css";

const Show = ( props ) => {
  const photoData = props.location.photoData;

  const [imgHeight, setImgHeight] = useState("");
  const [imgWidth, setImgWidth] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const img = new Image();
  img.onload = () => {
    const height = img.height;
    const width = img.width;
    setImgHeight(height);
    setImgWidth(width);
  }
    
  img.src = photoData.showImg;

  const onSucessfullCheckout = () => {
    alert("Ey yoooooo it worked boss!")
  }

  return (
    <div className="showDiv">
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
      <div 
        className="mainImage" 
        style={{ backgroundImage: `url('${photoData.showImg}')`}}>
          <div className="imgCover">
                <h5 className="title">{photoData.photoName}</h5>
              <div className="description">
                <p>{photoData.photoDescription}</p>
              </div>
              <div className="resolution">
                Resolution: {imgWidth}x{imgHeight}
              </div>

          </div>
        </div>
        <hr></hr>

      <div className="buyBanner">

        <div className="buyInfo">
          Price: ${photoData.photoPrice}
        </div>


        

        <button 
            to="#" 
            className="buyBtn text-center"
            onClick={() => setOpenModal(true)}
            >
              Buy 
              <br></br>
              <i class="fab fa-cc-stripe"></i>
        </button>
      </div>
   
      
    </div>

    <CardFieldModal 
      price={photoData.photoPrice}
      onSucessfullCheckout={onSucessfullCheckout}
      open={openModal}
      onClose={() => setOpenModal(false)}
      
      />
    </div>
  )
}

export default Show;