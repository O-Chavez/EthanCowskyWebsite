import React from 'react'
import Photo from './Photo';

const IndexPhotos = ({ photos }) => {

  const photoList = () => {
    if(photos){
      return(
        photos.map(photo => 
          <Photo 
            PhotoInfo={photo}
            key={photo._id}
            />
        )
      )
    } else {
      return (
        <div className="container text-center">
          <h3>Sorry... No photos found...</h3>
        </div>
      )
    }
  }

  return (
    <div className="IndexGrid mt-3">
      {photoList()}
    </div>
  )
}

export default IndexPhotos;