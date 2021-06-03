import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../api';
// import { useHistory } from "react-router-dom";


import "./index.css";

import PhotoCard from "./PhotoCard"
import Header from '../partials/Header';

import Landing from '../landing/Landing';

  const Index = () => {

    const [photos, setPhotos] = useState();
    // const history = useHistory();

  useEffect(() => {
    const getPhotos = async () => {
      const retrievedPhotos = await axios.get(`${api}/photos`);
      setPhotos(retrievedPhotos.data.allPhotos.reverse());
    }
     getPhotos();
  }, [])

  const photoList = () => {
    if(photos) {
      return (
        photos.map(photo => 
          <PhotoCard 
            photoInfo={photo}
            key={photo._id}
          />
        )
      )
    }
  }

  return (
    <div className="index">

    <Landing
      handleIndexScroll />


      <Header />

      <div 
        className="text-white my-5 px-5 d-flex align-items-center justify-content-center w-100 top_banner" >
          <hr className="w-25 d-block"></hr>
          <h3 className="flex-fill text-center">Image Gallery</h3>
          <hr className="w-25 d-block"></hr>


      </div>
      <div style={{color: "White", textAlign: "center"}}>Browse some of my artworks below and support me by purchasing a full resloution image!</div>


      
      <div className="d-flex photos">
        {photoList()}
      </div>
    </div>

  )
}


export default Index;