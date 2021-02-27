import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import AlertDismissable from "./AlertDismissable";

import {api} from '../../api';

 const EditPhoto = ( props ) => {

  const history = useHistory();

  const [photoName, setPhotoName] = useState(props.location.PhotoInfo.photoName);
  const [photoDescription, setPhotoDescription] = useState(props.location.PhotoInfo.photoDescription);
  const [photoPrice, setPhotoPrice] = useState(props.location.PhotoInfo.photoPrice);
  const [editResponse, setEditResponse] = useState();
  const [editMessage, setEditMessage] = useState("");


  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`${api}/photos/delete/${props.location.PhotoInfo._id}`);
    history.push('/admin');

  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const editResponse = await axios.put(`${api}/photos/edit/${props.location.PhotoInfo._id}`, {photoName, photoDescription, photoPrice});

    if(editResponse.status === 200){
      setEditResponse(200);

      history.push('/admin');
    } else {
      setEditResponse(412);
      setEditMessage("Hmm... Somthing went wrong...");
    }
  }

  return (
    <div>
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

      <AlertDismissable 
        condition={editResponse}
        message={editMessage}/>

      <div className="container mt-3">
      <Link 
        to="/admin" 
        className="backArrow text-center d-block"
        style={{ backgroundColor: "lightgrey"}}>
        <i class="fas fa-arrow-left"></i>
      </Link>
      <div 
        className="editPhotoShow mt-1"
        style={{ backgroundImage: `url('${props.location.PhotoInfo.showImg}')`}} />
        <form className="text-center">
          <div className="input-group mb-3">
            <span 
              className="input-group-text">Name
            </span>
          <input 
            className="form-control"
            type="text"
            placeholder={`${props.location.PhotoInfo.photoName}`}
            onChange={e => setPhotoName(e.target.value)}></input>
          </div>

          <div className="input-group mb-3">
            <span 
              className="input-group-text">Description
            </span>
          <input 
            className="form-control"
            type="text"
            placeholder={`${props.location.PhotoInfo.photoDescription}`}
            onChange={e => setPhotoDescription(e.target.value)}></input>
          </div>
          <div className="input-group mb-3">
            <span 
              className="input-group-text">Price
            </span>
          <input 
            className="form-control"
            type="number"
            placeholder={`$${props.location.PhotoInfo.photoPrice}`}
            onChange={e => setPhotoPrice(e.target.value)}></input>
          </div>

        </form>
        <button 
            className="btn btn-primary m-2"
            onClick={e => handleEdit(e)}
            >Edit
        </button>

        <button 
          className="btn btn-danger m-2"
          onClick={e => handleDelete(e)}
          >Delete
        </button>
      </div>
    </div>
  )
}
export default EditPhoto;