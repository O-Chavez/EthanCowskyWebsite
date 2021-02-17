import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../api';

import "./index.css";

import PhotoCard from "./PhotoCard"
import Header from '../partials/Header';

  const Index = () => {

    const [photos, setPhotos] = useState();

  useEffect(() => {
    const getPhotos = async () => {
      const retrievedPhotos = await axios.get(`${url}/photos`);
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
      <Header/>
      <div className="d-flex photos">
        {photoList()}
      </div>
    </div>
  )
}


export default Index;