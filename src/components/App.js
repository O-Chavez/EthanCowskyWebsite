import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import LandingPage from './landing/Landing';
// import Header from "./partials/Header";
// import Footer from './partials/Footer';
import Show from "./show/show";
import Index from "./index/Index";
import Admin from './admin/Admin';
import AdminEdit from './admin/EditPhoto';
import UserContext from "./admin/UserContext";
import Contact from './contact/Contact';

import "./App.css"

const stripePromise = loadStripe('pk_test_51IElf0Am3oDvvFco6vgINtkkNm9pAyi0VhWzqMunNGifr6NIfzYHqgLn8CKB13MgI0vomXVYgANWy4irlyuejec600EQ4s7DPk');

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <div className="app">
      <BrowserRouter>
        
        <UserContext.Provider value={{ userData, setUserData}}>
          <Elements stripe={stripePromise}>
            <Route render={({location}) => (
              <TransitionGroup
                className="landingSwitch">
                <CSSTransition 
                  key={location.key}
                  timeout={900}
                  classNames="landingDirection">
                  
                    <Switch location={location}>
                      <Route path="/" exact component={LandingPage} />
                      <Route path="/mywork" component={Index} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/admin" exact component={Admin} />
                      <Route path="/edit" component={AdminEdit} />
                      <Route path="/info" component={Show} /> 
                    </Switch>
                  </CSSTransition>
              </TransitionGroup>
            )} />
          </Elements>   
        </UserContext.Provider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
