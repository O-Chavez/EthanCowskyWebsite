import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import LandingPage from './landing/Landing';
// import Header from "./partials/Header";
import Footer from './partials/Footer';
import Show from "./show/show";
import Index from "./index/Index";
import Admin from './admin/admin';
import AdminEdit from './admin/EditPhoto';

import "./App.css"

const stripePromise = loadStripe('pk_test_51IElf0Am3oDvvFco6vgINtkkNm9pAyi0VhWzqMunNGifr6NIfzYHqgLn8CKB13MgI0vomXVYgANWy4irlyuejec600EQ4s7DPk');

export default function App() {
  return (
    
    <div className="app">
      
      <BrowserRouter>
        
        <Route path="/" exact component={LandingPage} />
        <Route path="/mywork" component={Index} />
        <Elements
          stripe={stripePromise}>
          <Route path="/info" component={Show} />
        </Elements>
        

        <Route path="/admin" exact component={Admin} />
        <Route path="/edit" component={AdminEdit} />
        

      </BrowserRouter>
      <Footer />

    </div>
    
  )
}
