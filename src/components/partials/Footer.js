import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <h2>Ethan Cowsky</h2>
      <a 
        href="https://www.instagram.com/ethancowsky/?hl=en" target="_blank" rel="noreferrer" 
        className="fs-4 text-white w-30">
          <i className="fab fa-instagram"></i>
      </a>
    </div>
  )
}
