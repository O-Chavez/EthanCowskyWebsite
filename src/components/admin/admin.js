import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import {api} from '../../api';

import AddPhoto from './addPhoto';
import AlertDismissable from './AlertDismissable';
import ShowPhotos from './IndexPhotos';
import "./admin.css"
import IndexPhotos from './IndexPhotos';

export default function Admin() {
  const [photos, setPhotos] = useState();
  const [uploadResponse, setUploadResponse] = useState(null);
  const [checkPhotos, setCheckPhotos] = useState(false);


  useEffect(() => {
    const getPhotos = async () => {
      const retrievedPhotos = await axios.get(`${api}/photos`);
      setPhotos(retrievedPhotos.data.allPhotos);
    }
     getPhotos();
  }, [uploadResponse, checkPhotos])




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
        <AlertDismissable 
          condition={uploadResponse}
          message={uploadResponse}
          />
        <AddPhoto 
          uploadResponse={UR => setUploadResponse(UR)}
          addedPhoto={e => setCheckPhotos(false)}
          photoUploaded={e => setCheckPhotos(true)}
        />        
      </div>
    <IndexPhotos photos={photos}/>
    </div>
  )
}
