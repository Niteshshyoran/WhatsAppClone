import React from "react";
import {
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import "./FooterSection.css";

const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="https://static.whatsapp.net/rsrc.php/yA/r/hbGnlm1gXME.svg" alt="WhatsApp" className="logo" />
          <button className="download-btn">Download ⬇</button>
        </div>

        <div className="footer-links">
          <div>
            <h4>What we do</h4>
            <ul>
              <li>Features</li>
              <li>Blog</li>
              <li>Security</li>
              <li>For Business</li>
            </ul>
          </div>
          <div>
            <h4>Who we are</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Brand Center</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4>Use WhatsApp</h4>
            <ul>
              <li>Android</li>
              <li>iPhone</li>
              <li>Mac/PC</li>
              <li>WhatsApp Web</li>
            </ul>
          </div>
          <div>
            <h4>Need help?</h4>
            <ul>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Apps</li>
              <li>Security Advisories</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>2025 © WhatsApp LLC</p>
        <div className="footer-links-bottom">
          <a href="#">Terms & Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="footer-socials">
          <FaXTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaFacebookF />
        </div>
        <div className="language-select">English ⌄</div>
      </div>
    </footer>
  );
};

export default FooterSection;
