import React, { useState } from 'react';
import axios from 'axios';

import ProgressBar from './Progress';

import { url } from '../../api';

const AddPhoto = ({ uploadResponse }) => {
  const [photoFile, setPhotoFile] = useState('');
  const [photoName, setphotoName] = useState('');
  const [photoPrice, setphotoPrice] = useState('');
  const [photoDescription, setphotoDescription] = useState('');

  const [uploadedPhoto, setUploadedPhoto] = useState("");

  const [uploadPercentage, setUploadPercentage] = useState(0);


  const handleAddAdditionalPhoto = () => {
    document.getElementById('formData').reset();
    setUploadedPhoto("");
    setUploadPercentage(0);
    uploadResponse("");
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!photoFile || !photoName || !photoDescription || !photoPrice){
        uploadResponse("Not all fields have been entered!")
      } else {
        const formData = new FormData();
        formData.append("file", photoFile);
        formData.append("photoName", photoName);
        formData.append("photoDescription", photoDescription);
        formData.append("photoPrice", photoPrice);
      const res = await axios({
        url: `/photos/upload`,
        method: "post",
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
        },
        // headers: {"x-auth-token": userData.token},
        baseURL: `${url}`,
        data: formData
      });
      const { showImg } = res.data.photo;
      const msg = res.data.msg;
      uploadResponse(msg);
      setUploadedPhoto(showImg);
      }
    } catch (error) {
        if(error.message === "Request failed with status code 412"){
          uploadResponse("Not all fields have been entered!")
        } else {
          uploadResponse(error.message)
        }
      }
  }

  const MainBtn = () => {
    if(uploadedPhoto === ""){
      return (
        <button className="btn btn-primary uploadBtn" onClick={e => onSubmit(e)}>Upload Photo</button>
      )
    } else {
      return (
        <button className="btn btn-success uploadBtn" type="reset" onClick={handleAddAdditionalPhoto}>Upload Another Photo</button>
      )
    }
  }

  return (
      <div className="photoUpload">
        <h4 className="text-center w-100 mb-3">Upload New Photo</h4>
            <form id="formData" encType="multipart/form-data" className={`${uploadedPhoto === "" ? "formFields " : "formFieldsClosed"}`}>
              <input className="photo-file form-control mb-3" type="file" accept="image/png, image/jpeg" required="required" onChange={e => setPhotoFile(e.target.files[0])}></input>
        
              <div className="photoName input-group mb-3">
                <span className="input-group-text" id="photoname">Enter Photo Name</span>
                <input type="text" className="form-control" placeholder="Photo Name" required="required" aria-describedby="photoname" onChange={e => setphotoName(e.target.value)}></input>
              </div>
        
              <div className="photoPrice input-group mb-3">
                <span className="input-group-text" id="photoname">Enter Price</span>
                <input type="number" className="form-control" placeholder="$$$" required="required" onChange={e => setphotoPrice(e.target.value)} aria-describedby="photoname"></input>
              </div>
        
              <div className="input-group photo-description mb-3">
                <span className="input-group-text" id="photoname">Photo Description</span>
                <input type="text" className="form-control" maxLength="150" onChange={e => setphotoDescription(e.target.value)} required="required" placeholder="Max 120 charecters..." aria-describedby="photoname"></input>
              </div>
            </form>
            

            <ProgressBar percentage={uploadPercentage} uploadedPhoto={uploadedPhoto} />

            <div 
              className={`${uploadedPhoto === "" ? "hidden" : "photoPreview"} text-center`}>
              <img 
                src={`${uploadedPhoto}`} 
                alt="Uploaded-img"
                style={{ width: "25em", height: "15em", margin: "1em"}}
                ></img>
            </div>
            
            <MainBtn />
            
   
      </div>
      
    )
  }

  export default AddPhoto;
