import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { api } from '../../api';


import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './CardField.css';

const BG_STYLE = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed", /* Stay in place */
  zIndex: 60, /* Sit on top */
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100%", /* Full width */
  height: "100%",/* Full height */
  backgroundColor: "rgba(0, 0, 0, 0.6)" /* Black w/ opacity */
 
}

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      border:"red",
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: '#fce883'},
      '::placeholder': {color: '#87bbfd'},
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

const CheckoutForm = ({ photoData, sucessfullCheckout, open, onClose }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutResponse, setCheckoutResponse] = useState();
  const [purchasedPhotoRes, setPurchasedPhotoRes] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    const billingDetails = {
        name: event.target.name.value,
        email: event.target.email.value,
    }
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setProcessingTo(true);

    const { data: clientSecret } = await axios.post(`${api}/payment/test`, {
      // amount is in lowest denomination, $1 = 100 (cents)
      amount: photoData.photoPrice * 100,
      description: photoData.photoName
    });

    // Get a reference to a mounted CardElement.
    const cardElement = elements.getElement(CardElement);

    const {error} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    });

    if (error) {
      return (
        setCheckoutResponse(error.message),
        setProcessingTo(false)
      )
    } else {
       const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: billingDetails
        },
        receipt_email: billingDetails.email
      });
  
      if(confirmedCardPayment.paymentIntent.status === "succeeded"){
        try {
        const purchasedPhoto = await axios.get(`${api}/photos/purchase/${photoData._id}`);
        setCheckoutResponse("Success!");
        setPurchasedPhotoRes(purchasedPhoto.data.purchasedPhoto.file);

        sucessfullCheckout(purchasedPhoto.data);
        // onClose(false);
        } catch (error) {
          setCheckoutResponse("somthing went wrong...");
        }
        
      } else {
        setCheckoutResponse(confirmedCardPayment.paymentIntent.status)
      }
    }
  };

  const handleClose = () => {
    if(purchasedPhotoRes === ""){
      onClose(false);
      document.getElementById("myForm").reset();
      setCheckoutResponse(null);
      setProcessingTo(false);
    } else {
      onClose(false);
      setCheckoutResponse(null);
      setProcessingTo(false);
    }
  }
 
  const HandleResponse = ({ checkoutResponse }) => {
    if(!checkoutResponse){
      return null;
    } else {
      if(checkoutResponse === "Success!"){
      return (
        <p style={{ color: "green"}}>{checkoutResponse}</p>
      )
      } else {
        return (
          <p style={{ color: "#ffc7ee"}}>{checkoutResponse}</p>
        )
      }
    }
  }

  if(!open){
    return null;
  } else if (purchasedPhotoRes === "") {
    return ReactDOM.createPortal (
    <div style={BG_STYLE}>
    <div className="formBackground">
      <form 
        className="FormGroup" 
          onSubmit={handleSubmit}
          id="myForm">
        <button
          onClick={handleClose}
          className="closeBtn"
          >
          <i className="far fa-times-circle"></i>
        </button>
        
          <div className="FormRow">
            <label htmlfor="name" className="FormRowLabel">Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              placeholder="Bilbo Baggins" 
              className="formRowInput"></input>
          </div>
          <div className="FormRow">
            <label htmlfor="email" className="FormRowLabel">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              placeholder="ring_carrier@fellowship.com" className="formRowInput"></input>
          </div>

          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>

          <button 
            type="submit" 
            disabled={!stripe || isProcessing}
            className="payBtn">
            {isProcessing ? "Processing..." : `Pay $${photoData.photoPrice}`}
          </button>
          <HandleResponse 
            checkoutResponse={checkoutResponse}/>
        </form>

        <div className="disclaimerDiv">
          <p>Disclaimer:</p>
          <p>By purchasing you agree that this image is for for personal use only and not for re-sale or distribution. The creator retains the legal ownership of the image rights.</p>
        </div>
    </div>
      
    </div>,
    document.querySelector('#modal')
  );
  } else {
    return (
      <div style={BG_STYLE}>
        <div className="container FormGroup p-5">
          <button
            onClick={handleClose}
            className="closeBtn">
          <i class="far fa-times-circle"></i>
          </button>
          <p className="text-white">Thank you for your purchase!</p>
          <a 
            className="btn btn-primary m-4"
            href={`${purchasedPhotoRes}`}
            target="_blank"
            rel="noreferrer"
            >
            Get Full Resolution Image</a>
            <p className="text-white">Once you click the button, right click on the full resolution image and select "save image as..." and choose where you want your image saved!</p>
        </div>
      </div>
    )
    
  }
};

export default CheckoutForm;
