import React from "react";
import PurpleBackground from "../Components/PurpleBackground.mp4";
import yellowBackground from "../Components/NavBackground.mp4";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="Pcontainer">
        <div className="overlay2"></div>
        <video id="vid2" src={PurpleBackground} autoPlay loop muted />

        <div className="Pbody">
          <div className="contact-us">
            <h1>Contact Us</h1>
            <p>
              Have questions, feedback, or need assistance? We're here to help!
              At Metallic, your satisfaction is our priority, and we’d love to
              hear from you.
            </p>
            <h2>Get in Touch</h2>
            <p>You can reach out to us through any of the following ways:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@metallic.com">support@metallic.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Toy Lane, Fun City, Imagination
                World
              </li>
            </ul>
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
            <h2>Follow Us</h2>
            <p>
              Stay connected with Metallic for the latest updates, offers, and
              new arrivals:
            </p>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
