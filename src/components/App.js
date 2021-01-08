import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './landing/Landing';
import Index from "./index/index";

export default function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/mywork" component={Index} />
        

      </BrowserRouter>

    </div>
    
  )
}
