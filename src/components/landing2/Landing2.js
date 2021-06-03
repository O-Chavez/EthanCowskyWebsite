import React from 'react'

import './Landing2.css'

export default function Landing2() {
  return (
    <div className="landing2 d-flex flex-row flex-wrap align-items-center justify-content-center">

    <img class="rounded" src="https://d147gc4b3ckpsg.cloudfront.net/filters:quality(80)/filters:format(jpeg)/uploads/242424.png" style={{height: "50%", width: "50%"}}></img>
        

        <div style={{height: "50%", width: "50%", display: "flex", justifyContent:"center", alignItems: "center"}} class="rounded">
          <img src="https://ethan-cowsky-website.s3.us-west-1.amazonaws.com/uploads/12312.png" style={{height: "90%"}}></img>
        </div>
      
        
      
        <div class="rounded" style={{height: "50%", width: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white"}}><h2 style={{border: "1px solid white", padding: "1em"}}>Contact me</h2></div>
      
        <img src="https://d147gc4b3ckpsg.cloudfront.net/filters:quality(100)/fit-in/1200x800/filters:format(jpeg)/uploads/hi mom.png" alt="Ethan Cowsky" style={{height: "50%", width: "50%"}} class="rounded"></img>
      
     
    </div>
  )
}
