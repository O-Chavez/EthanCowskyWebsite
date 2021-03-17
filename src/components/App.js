import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { api } from "../api";
import axios from "axios";

import LandingPage from './landing/Landing';
// import Header from "./partials/Header";
import Footer from './partials/Footer';
import Show from "./show/show";
import Index from "./index/Index";
import Admin from './admin/Admin';
import AdminEdit from './admin/EditPhoto';
import UserContext from "./admin/UserContext";

import "./App.css"

const stripePromise = loadStripe('pk_test_51IElf0Am3oDvvFco6vgINtkkNm9pAyi0VhWzqMunNGifr6NIfzYHqgLn8CKB13MgI0vomXVYgANWy4irlyuejec600EQ4s7DPk');

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
        if(token !== null) {
          const tokenResponse = await axios.post(`${api}/users/tokenIsValid`, null, { headers: {"x-auth-token": token } }
      );
        if (tokenResponse.data){
          const userResponse = api.get(`${api}/users/`, {
            headers: {"x-auth-token": token}, 
        });
          setUserData({
            token,
            user: userResponse.data
          });
        }
    } else { 
          localStorage.setItem("auth-token", "");
        token = "";} 
  }
  checkLoggedIn();
}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/mywork" component={Index} />
          <UserContext.Provider value={{ userData, setUserData}}>
            <Route path="/admin" exact component={Admin} />
            <Route path="/edit" component={AdminEdit} />
          </UserContext.Provider>
          
          <Elements
            stripe={stripePromise}>
            <Route path="/info:photoName" component={Show} />
          </Elements>
         
        </Switch>

      </BrowserRouter>

    </div>
    
  );
}

export default App;
