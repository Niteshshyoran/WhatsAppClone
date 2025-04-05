import React from "react";
import "./Header.css";
import { FaDownload } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <nav className="whatsapp-header">
      {/* Left - Logo and Name */}
      <div className="logo">
        <img
          src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
          alt="WhatsApp Logo"
          className="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
        />
      </div>

      {/* Middle - Navigation Links */}
      <ul className="nav-links">
        <li>
          Features <FiChevronDown />
        </li>
        <li>Privacy</li>
        <li>Help Center</li>
        <li>Blog</li>
        <li>For Business</li>
        <li>Apps</li>
      </ul>

      {/* Right - Buttons */}
      <div className="buttons">
        <button className="login-btn">Log in</button>
        <button className="download-btn">
          Download <FaDownload className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
