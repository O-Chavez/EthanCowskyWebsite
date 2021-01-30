import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import {url} from '../../api';

import AddPhoto from './addPhoto';
import ShowPhotos from './IndexPhotos';
import "./admin.css"
import IndexPhotos from './IndexPhotos';

export default function Admin() {
  const [photos, setPhotos] = useState();
  const [uploadResponse, setUploadResponse] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      const retrievedPhotos = await axios.get(`${url}/photos`);

      setPhotos(retrievedPhotos.data.allPhotos);
    }
     getPhotos();

  }, [uploadResponse])




  return (
    <div className="admin">
      <nav className="landingNav navbar navbar-dark bg-dark">
        <div className="container-fluid mx-5">
          <Link to="/"
            className="navbar-text text-white w-30 my-auto">
            Ethan Cowsky
          </Link>
          <p 
            className="navbar-text text-white w-30 my-auto">
            Admin Page
          </p>
            <button 
              className="btn btn-danger">
              Sign Out
            </button>
        </div>
      </nav>

      <div className="container">
        <div 
          className={`alert ${uploadResponse === "Photo sucessfully uploaded!" ? "alert-info" : "alert-danger"} alert-dismissible fade ${uploadResponse === "" ? "hide" : "show"}`} 
          role="alert">
          {uploadResponse}
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="alert" 
            aria-label="Close"
          ></button>
        </div>
        <AddPhoto uploadResponse={UR => setUploadResponse(UR)}/>




        
      </div>
    <IndexPhotos photos={photos}/>
      
    </div>
  )
}
