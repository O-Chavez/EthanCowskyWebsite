import React from 'react';
import { Link } from "react-router-dom";

import "./PhotoCard.css"

export default function PhotoCard() {
  return (
    <div className="photocard">
      <div className="image">

        <div className="info text-center">

          <div className="infoText">
            Info here about the current photo. Blah blach blach yayayaya
            
          </div>
          <Link className="infoButton" to="/info">
            More Info
          </Link>
          
        </div>

      </div>
    </div>
  )
}
