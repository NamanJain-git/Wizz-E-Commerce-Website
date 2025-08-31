import "./Footer.css"
import { FaInstagram } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="queries">
                    <div className="footer-items">
                        <span>About</span>
                        <a href="faq">Contact Us</a>
                        <a href="faq">About Us</a>
                        <a href="faq">Careers</a>
                        <a href="faq">Corporate Information</a>
                    </div>
                    <div className="footer-items">
                        <span>Help</span>
                        <a href="faq">Payment</a>
                        <a href="faq">Shipping</a>
                        <a href="faq">Cancelation & Return</a>
                        <a href="faq">FAQ</a>
                    </div>
                    <div className="footer-items">
                        <span>Consumer Policy</span>
                        <a href="faq">Security & Privacy</a>
                        <a href="faq">Terms of Use</a>
                        <a href="faq">Site Map</a>
                        <a href="faq">Cancellation & Return</a>
                    </div>
                </div>
                <div className="address">
                    <div className="mailus">
                        <span>Mail Us</span>
                        <p>Wizz India Private Limited</p>
                        <p>complainwizz@gmail.com</p>
                        <p>contactwizz@gmail.com</p>
                        <p>helpwizz@gmail.com</p>

                        <div className="socialLinks">
                            <div className="socialIcons flex text-white mt-8 ml-2">
                                <a href=""><FaInstagram size={25} style={{ margin: "2px"}} /></a>
                                <a href=""><FaFacebookF size={25} style={{ margin: "2px"}} /></a>
                                <a href=""><FaXTwitter  size={25} style={{ margin: "2px"}} /></a>
                            </div>
                            <p className="">Social Handles</p>
                        </div>
                    </div>

                    <div className="mailus">
                        <span>Company Registered Office</span>
                        <p>Wizz India Private Limited</p>
                        <p>ABC Building Mania</p>
                        <p>D-block Tower No. 3F</p>
                        <p>Delhi, India</p>
                        <p>Contact:</p>
                        <p>0435612980/0435612981</p>
                    </div>
                </div>

            </div>

            <div className="country">
                <span>Wizz India</span>
            </div>
        </footer>
    )
}
export default Footer