import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Footer from '../partials/Footer';

import CardFieldModal from '../stripe/CardFieldModal';

import "./show.css";

const Show = ( props ) => {
  const history = useHistory();
  const photoData = props.location.photoData;

  const [imgHeight, setImgHeight] = useState("");
  const [imgWidth, setImgWidth] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [tempPhotoData, setTempPhotoData] = useState();

  useEffect(()=> {
    const photoInformationToUse = window.localStorage.getItem("photo-information");

    setTempPhotoData(photoInformationToUse)
  }, [])
  useEffect(() => {
    window.localStorage.setItem("photo-information", photoData);
  })

  if(!props.location.photoData){
    return history.goBack();
   
  } else {
    const img = new Image();

    img.onload = () => {
      setImgHeight(img.height);
      setImgWidth(img.width);
    }
    
  img.src = photoData.showImg;
  }
  
  const onSucessfullCheckout = (purchasedPhoto) => {
    console.log("photo recieved in show", purchasedPhoto.purchasedPhoto.file)
  }

  console.log(photoData)
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
          // style={{ backgroundImage: `url('${photoData.showImg}')` }}
          
          
          >
          <img src={photoData.showImg} alt="Artwork Unavailable..." style={{ width: "auto", maxHeight: "100%", minHeight: "40em"}}></img>
          
            <div className="imgCover">
                  <h5 className="title">{photoData.photoName}</h5>
                <div className="description">
                  <p>{photoData.photoDescription}</p>
                </div>
                <div 
                  className="resolution">
                  <div 
                    className ="resDemo"
                    style={{ width: `${imgWidth / 30}px`, height: `${imgHeight / 30}px`}}></div>
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
}

export default Show;