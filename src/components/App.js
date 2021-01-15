import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LandingPage from './landing/Landing';
import Header from "./partials/header";
import Show from "./show/show";
import Index from "./index/index";

import "./App.css"

export default function App() {
  return (
    
    <div className="app">
      
      <BrowserRouter>
        
        <Route path="/" exact component={LandingPage} />
        <Route path="/mywork" component={Index} />
        <Route path="/info" component={Show} />
        

      </BrowserRouter>

    </div>
    
  )
}
