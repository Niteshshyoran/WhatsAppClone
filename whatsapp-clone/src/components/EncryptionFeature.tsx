import React from "react";
import "./EncryptionFeature.css";

const EncryptionFeature: React.FC = () => {
  return (
    <section className="encryption-section">
      {/* Left - Phone Mockup */}
      <div className="phone-mockup">
        <img
          src="https://scontent.whatsapp.net/v/t39.8562-34/473060158_1449917663062833_5908605757370656304_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=-aBOuRr9WpMQ7kNvwF6UQ9E&_nc_oc=AdlELAFHN_0wP4QbRy5zaWshSabpsOJ4ObIIJWqeCxpEtbX7F-eE_q570lpoA2JZrvw&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIdDt5PkSlNNiB-g4SvLF4Tvjg0shUTlM7-g9Z0PpQ10M&oe=67F66FD5"
          alt="Encrypted Message"
          className="phone-image"
        />
      </div>

      {/* Right - Text Content */}
      <div className="text-content">
        <h1 className="heading">
          Speak <span className="highlight">freely</span>
        </h1>
        <p className="description">
          With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them, and nobody in between, not even WhatsApp.
        </p>
        <a href="#" className="learn-link">
          Learn more →
        </a>
      </div>
    </section>
  );
};

export default EncryptionFeature;
