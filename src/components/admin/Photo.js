import React from 'react';

import { Link } from "react-router-dom";

import { url } from '../../api';
import './Photo.css';

 const Photo = ({ PhotoInfo }) => {

  return (
    <div className="adminPhoto">
      <div 
        className="adminImg"
        style={{ backgroundImage: `url('${PhotoInfo.showImg}')`}}
        >
        <div className="adminTitle text-center">
          <h3>{PhotoInfo.photoName}</h3>
          <h4>${PhotoInfo.photoPrice}</h4>
        </div>
        <div className="admininfo">
          <div className="adminDescription">
            <h5>{PhotoInfo.photoDescription}</h5>
          </div>
          <div className="adminBtn">
            <Link 
              className="btn btn-primary"
              to={{ 
                pathname:'/edit', 
                PhotoInfo
              }}
              >
              Edit Photo
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Photo;