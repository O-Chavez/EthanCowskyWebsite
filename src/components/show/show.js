import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

import CardFieldModal from '../stripe/CardFieldModal';

import "./show.css";

const Show = ( props ) => {
  const history = useHistory();
  const [imgHeight, setImgHeight] = useState("");
  const [imgWidth, setImgWidth] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(()=> {
    if(!props.location.photoData){
      history.push('/');
    } else {
      setIsRendered(true);
    }
  }, [props.location.photoData, history])

  if (isRendered === true)  {
  
    const photoData = props.location.photoData;
    const img = new Image();

    img.onload = () => {
      setImgHeight(img.height);
      setImgWidth(img.width);
    }
    
    img.src = photoData.showImg;

    const onSucessfullCheckout = (purchasedPhoto) => {
        console.log("Purchased Photo!", purchasedPhoto.purchasedPhoto.file)
      };

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
          <Link to="/" className="backArrow text-center">
            <i className="fas fa-arrow-left"></i>
          </Link>
          
        <div 
          className="mainImage" >
          <img src={photoData.showImg} alt="Artwork Unavailable..." className="showImg"></img>
          
            <div className="imgCover">
                  <h5 className="title">{photoData.photoName}</h5>
                <div className="description">
                  <p>{photoData.photoDescription}</p>
                </div>
                <div 
                  className="resolution">
                  
                  Resolution: {imgWidth}x{imgHeight}
                </div>
            </div>
            
          </div>
        <hr></hr>

      <div className="buyBanner">
        <div className="buyInfo">
          Price: ${photoData.photoPrice}
        </div>
        <div className="resoultionDisclaimer">Note: The demo image above is downscaled. The purchasable photo is full resolution.</div>
        <button 
            to="#" 
            className="buyBtn text-center"
            onClick={() => setOpenModal(true)}
            > Buy 
              <br></br>
              <i class="fab fa-cc-stripe"></i>
        </button>
      </div>      
    </div>

    <CardFieldModal 
      photoData={photoData}
      sucessfullCheckout={(purchasedPhoto) => onSucessfullCheckout(purchasedPhoto)}
      open={openModal}
      onClose={() => setOpenModal(false)}
      />
    </div>
  )
  } else {
    return null
  }
}

export default Show;