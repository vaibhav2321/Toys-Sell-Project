import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import yellowBackground from '../Components/NavBackground.mp4'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>

      <div className="Pcontainer">
        <div className="overlay2"></div>
        <video id='vid2' src={PurpleBackground} autoPlay loop muted />
        <div className="Pbody">
          <h1>About Us</h1>
        </div>

      </div>


    </>
  )
}
