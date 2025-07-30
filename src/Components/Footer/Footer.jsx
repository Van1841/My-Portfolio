import React from "react";
import "./Footer.css";

const d = new Date();
const yr = d.getFullYear();

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>To recieve freshly updated content here, feel free to Subscribe:)</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type ="email" placeholder="Enter your mail <3"/>
                    </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
            <hr /> 
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ {yr} Vanshika Bhojani. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;