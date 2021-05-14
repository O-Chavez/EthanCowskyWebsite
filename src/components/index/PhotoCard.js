import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./PhotoCard.css"

  const PhotoCard = ({ photoInfo }) => {

   

  return (
    <div 
      className="photocard"
      >
      <div 
        className="image"
        style={{ backgroundImage: `url('${photoInfo.showImg}')`}}>
        <div className="info text-center">
          <div className='infoTitle'>
            {photoInfo.photoName}
          </div>
          <div className="infoText">
            {photoInfo.photoDescription}
          </div>
          <Link 
            className="infoButton" 
            to={{ pathname: `/info:${photoInfo.photoName}`, photoData: photoInfo }}
            >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard;
