import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />

          <p>
            Order delicious meals from your favorite local restaurants with
            ease. <br />
            Enjoy fast, reliable delivery, real-time tracking, and convenient
            payment options. All designed to satisfy your cravings and make
            mealtime effortless.
          </p>

          <div className="footer-social-icons">
            <a href="https://www.facebook.com/">
              <img src={assets.facebook_icon} alt="" />
            </a>

            <a href="https://x.com/">
              <img src={assets.twitter_icon} alt="" />
            </a>

            <a href="https://www.linkedin.com/">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>

          <ul>
            <li>
              <ScrollLink
                to="header"
                offset={-110}
                smooth={true}
                duration={1000}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/delivery">Delivery</a>
            </li>
            <li>
              <a href="/privacypolicy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>

          <ul>
            <li>
              <a href="tel:+917006916615">Call Us</a>
            </li>
            <li>
              <a href="mailto:zubairgani003@gmail.com">Write an emai mail to us</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright © 2025 Tomato.com. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
