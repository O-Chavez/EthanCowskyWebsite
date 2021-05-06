import React from 'react'

import Header from '../partials/Header'
import './contact.css'

export default function Contact() {
  return (
    <div className="contactPage">
    <Header/>


      <img 
        src="https://live.staticflickr.com/371/32795970505_1fb785ef91_k.jpg" 
        alt="Artwork Unavailable..." 
        className="heroShot"
        style={{ }}></img>

      <div className="contactInfo container">
        <div className="artistName">Ethan Cowsky</div>

        <div className=" contactDescription text-center">Ethan Cowsky is a 3D Artist, photographer and all around solid dude. He does commisioned 3D renders and photography for clients upon request so if you have an idea you would like to see rendered feel free to contact him below!</div>

        <div>Instagram</div>
        <div>Email: EthanCowsky@gmail.com</div>
      </div>
      

    </div>
  )
}
