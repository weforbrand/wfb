import React from "react";
import "../App.css";
import { IonIcon } from "@ionic/react";
import {
  logoTwitter,
  logoInstagram,
  logoLinkedin,
  logoFacebook,
} from "ionicons/icons";
import TawkToWidget from "../ChatBot/tawkToWidget";

const Footer = () => {
  return (
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <p class="footer-text">
              <img
                src="./assets/images/logo-1.png"
                alt="feature banner"
                style={{ maxWidth: "120px" }}
              />
            </p>

            <ul className="social-list">
              <li>
                <a href="https://twitter.com/" className="social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" className="social-link">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" className="social-link">
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
              <li>
                <a href="https:facebook.com/" className="social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-link-box">
            <ul class="footer-link-list">
              <li>
                <h3 class="h4 link-title">Company</h3>
              </li>

              <li>
                <a href="/whyus" class="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="/industry" class="footer-link">
                  Features
                </a>
              </li>

              <li>
                <a href="/industry" class="footer-link">
                  Pricing
                </a>
              </li>
            </ul>

            <ul class="footer-link-list">
              <li>
                <h3 class="h4 link-title">Products</h3>
              </li>

              <li>
                <a href="/blog" class="footer-link">
                  Blog
                </a>
              </li>

              <li>
                <a href="/contact" class="footer-link">
                  Help Center
                </a>
              </li>

              <li>
                <a href="/contact" class="footer-link">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="footer-link-list">
              <li>
                <h3 class="h4 link-title">Resources</h3>
              </li>

              <li>
                <a href="/faq" class="footer-link">
                  FAQ’S
                </a>
              </li>

              <li>
                <a href="/faq" class="footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <ul class="footer-link-list">
              <li>
                <h3 class="h4 link-title">Relevent</h3>
              </li>

              <li>
                <a href="/whyus" class="footer-link">
                  Why
                </a>
              </li>

              <li>
                <a href="/industry" class="footer-link">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2024 <a href="/">WeForBrands</a> All right reserved
        </p>
      </div>
      <TawkToWidget />
    </footer>
  );
};

export default Footer;
