import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./show.css";

const Show = ( props ) => {
  const photoData = props.location.photoData;

  const [imgHeight, setImgHeight] = useState("");
  const [imgWidth, setImgWidth] = useState("");

  const img = new Image();
  img.onload = () => {

    const height = img.height;
    const width = img.width;
    setImgHeight(height);
    setImgWidth(width);
    // console.log("ratio", width / height )
  }
    
  img.src = photoData.showImg;

  // console.log(imgHeight)
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
          </div>
        </div>
        <hr></hr>

      <div className="buyBanner">
        <div className="buyInfo">
      </div>


        <p style={{color: "red"}}>
          Resolution: {imgWidth}x{imgHeight}
        </p>

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
export default Show;