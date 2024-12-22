import React from 'react'
import '../App.css'
import PurpleBackground from '../Components/PurpleBackground.mp4'

export default function Login() {
  return (
    <>

      <div className="titlebody">

        <div className="overlay2"></div>
        <video id='vid2' src={PurpleBackground} autoPlay loop muted />


        <div className="form">

          <div className="register">
            <h2>Log-In</h2>
            <form id="register">
              <label>Email :</label>
              <br />
              <input type="email" name="email" id="email"
                placeholder="Enter Your Valid Email" />


              <br /><br />

              <label>Password :</label>
              <br />
              <input type="password" name="fname" id="name"
                placeholder="Enter Your Password" />



              <br /><br />
              <input type="button" value="Log-In" name="submit"
              onClick={() => {window.location.href = '/'}}
                id="submit" />
            </form>
          </div>
        </div>

      </div>


    </>
  )
}
