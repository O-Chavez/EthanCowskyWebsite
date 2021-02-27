import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import "./CardField.css"


const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
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

export default function CardField() {

  return (
    <fieldset className="FormGroup">
    <div className="FormRow">
      <CardElement options={CARD_OPTIONS}  />
    </div>
  </fieldset>
  )
}
