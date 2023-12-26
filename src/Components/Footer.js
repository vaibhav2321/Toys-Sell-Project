import React from 'react'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <div className="logo"></div>

                    <p class="footer-links">
                        <Link to="/">Home</Link>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <Link to="/About">About Us</Link>
                        <Link to="/Contact">Contact Us</Link>
                    </p>

                    <p class="footer-company-name">Metallica © 2023</p>
                </div>

                <div class="footer-center">

                    <div>
                        <FontAwesomeIcon icon={faLocationDot} bounce />
                        <p><span>235, Near Bus Stand</span> ManiMajra, Chandigarh</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMobileScreenButton} shake />
                        <p>+91 8360695417</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p><a href="mailto:support@company.com">vaibhavverma2321@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        This is the best place to get your kid a best memory of there childhood, kids make there some most beautiful memories with there first toys.
                    </p>

                    <div class="footer-icons">

                        <a href="#"><img src="https://clipart.info/images/ccovers/1516920567instagram-png-logo-transparent.png" alt="" style={{height:'40px', width:"35px"}} /></a>
                        <a href="#"><img src="https://th.bing.com/th/id/OIP.crw2_JrC3ftvhScemCTe0wAAAA?w=303&h=278&rs=1&pid=ImgDetMain" alt="" style={{height:'40px', width:"40px"}} /></a>
                        <a href="#"><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png" alt="" style={{height:'40px', width:"40px"}}  /></a>
                        <a href="#"><img src="https://bitemycoin.com/wp-content/uploads/2018/06/GitHub-Logo.png" alt="" style={{height:'40px', width:"40px"}}  /></a>

                    </div>

                </div>

            </footer>
        </>
    )
}
