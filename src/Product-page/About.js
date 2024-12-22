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
          <div className="about-us">
            <h1>Welcome to Metallic – Where Fun Meets Imagination!</h1>
            <p>
              At Metallic, we believe that toys are more than just playthings – they are gateways to creativity, learning, and endless joy. Founded with a passion for making every childhood moment magical, our mission is to provide high-quality toys that inspire smiles, spark imaginations, and create unforgettable memories for kids of all ages.
            </p>
            <h2>Our Story</h2>
            <p>
              Every great adventure begins with a dream. Metallic was born out of a desire to offer parents and caregivers a one-stop destination for toys that combine fun, safety, and learning. From classic toys to the latest trends, we carefully curate a wide range of products to suit every child’s interests and developmental needs.
            </p>
            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Extensive Variety:</strong> From cuddly stuffed animals and interactive games to educational kits and outdoor fun, we have something for every little explorer.
              </li>
              <li>
                <strong>Quality & Safety:</strong> We partner with trusted manufacturers to ensure all our toys meet the highest safety standards.
              </li>
              <li>
                <strong>Affordable Prices:</strong> Great toys shouldn’t come with a hefty price tag. We strive to make happiness accessible to every family.
              </li>
              <li>
                <strong>Hassle-Free Shopping:</strong> With an easy-to-use website, secure payment options, and fast delivery, we make shopping for toys as joyful as playing with them.
              </li>
            </ul>
            <h2>Why Choose Us?</h2>
            <p>
              At Metallic, we’re not just selling toys – we’re building moments of happiness. Whether it’s a birthday, holiday, or just because, we’re here to help you find the perfect gift that lights up a child’s face. Our dedicated customer support team is always ready to assist you, ensuring your shopping experience is seamless and delightful.
            </p>
            <h2>Join Our Toy Family</h2>
            <p>
              We’re more than just an online store; we’re a community that celebrates the wonder of childhood. Follow us on social media for exclusive deals, parenting tips, and the latest arrivals in our toy collection.
            </p>
            <p>
              Thank you for choosing Metallic. Let’s bring a world of fun, learning, and laughter to your little ones!
            </p>
            <p><strong>Happy Shopping,</strong></p>
            <p><em>The Metallic Team</em></p>
          </div>
        </div>

      </div>


    </>
  )
}
