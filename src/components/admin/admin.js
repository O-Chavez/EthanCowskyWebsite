import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import {api} from '../../api';

import AddPhoto from './addPhoto';
import AlertDismissable from './AlertDismissable';
import ShowPhotos from './IndexPhotos';
import "./admin.css"
import IndexPhotos from './IndexPhotos';
import UserContext from "./UserContext";

const Admin = () => {
  const [photos, setPhotos] = useState();
  const [uploadResponse, setUploadResponse] = useState(null);
  const [checkPhotos, setCheckPhotos] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {userData, setUserData} = useContext(UserContext);

  useEffect(() => {
    const getPhotos = async () => {
      const retrievedPhotos = await axios.get(`${api}/photos`);
      setPhotos(retrievedPhotos.data.allPhotos.reverse());
    }
     getPhotos();
  }, [uploadResponse, checkPhotos])

  const handleSignIn = async () => {
    const loginData = {
      username,
      password
    }
    // check if signed in
    const userLogin = await axios.post(`${api}/admin/signin`, loginData);
     // if signed in, get JWT
    setUserInfo(
      {      
        token: userLogin.data.token,
        user: userLogin.data.user
      }
      );

      if(userLogin.status === 200){
          // change sign out btn
        setIsLoggedIn(true);
      } else {
        console.log("userlogin", userLogin)
      }
  }

  const onSignOut = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  }
  const onSignIn = () => {

  }

  const SignInBtn = () => {
    if(isLoggedIn){
      return (
        <button 
          className="btn btn-danger"
          onClick={onSignOut}>
          Sign Out
        </button>
      )
      
    } else {
      return(
        <button 
          className="btn btn-primary"
          onClick={onSignIn}>
          Sign In
        </button>
      )
      
    }
  }


  if(isLoggedIn){
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
                <SignInBtn/>
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
  } else {
    return(
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
                <SignInBtn/>
              </div>
            </nav>
            <div className="container mt-5 d-flex flex-column">
              <div className="mb-3">
                <label 
                  for="username" 
                  className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}></input>
              </div>

              <div className="mb-3">
                <label 
                  for="password" 
                  className="form-label">Password</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="password" 
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}></input>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <button 
                  className="btn btn-primary"
                  onClick={handleSignIn}>Sign In
                </button>
                <Link 
                  to="/"
                  className="btn btn-secondary"
                  >Go Back
                </Link>
              </div>
              
            </div>
      </div>
          
    )

  }


  
}

export default Admin;