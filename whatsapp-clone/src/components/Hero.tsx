import React from "react";
import "./Hero.css";
import { FaDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Message<br />privately</h1>
        <p>
          Simple, reliable, private messaging and<br />
          calling for free<sup>*</sup>, available all over the<br />
          world.
        </p>

        <div className="hero-buttons">
          <button className="download-btn">
            Download <FaDownload />
          </button>
          <button className="login-btn">
            Log in <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Chat overlays (decorative) */}
      <div className="chat-overlay chat1">
        <img src="https://scontent.whatsapp.net/v/t39.8562-34/472902085_9036161936482175_1983222485176306165_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=y7PJHpFQTn4Q7kNvwHibWk_&_nc_oc=AdmriC2_kxSFYKqCZs3WrM8M55P0eHPU2LJrz-38NWpbDvzoQypBxAIb_vzF4TBLgoo&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIfOJOSD0G49zmODdaJCTTkaKRI8L1QPpKLgM_Ysh7ri5&oe=67F6725C" alt="Chat 1" />
      </div>
      <div className="chat-overlay chat2">
        <img src="https://scontent.whatsapp.net/v/t39.8562-34/473668291_591315470187267_8338179311223738710_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=ERb8U3zIFQsQ7kNvwG7Y_CW&_nc_oc=AdmPcm49lRwtc53EB-RDW1x_jSHSYF2dip_YvSA8ucycIIZKMHBcZOh01HFKBFF3Vd4&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIXtd3mOjToGPYBtkRZV6m2FzxYf7R0aUmr4ijrFy9emi&oe=67F6888E" alt="Voice Note" />
      </div>
      <div className="chat-overlay chat3">
        <img src="https://scontent.whatsapp.net/v/t39.8562-34/327713084_566495871797259_1779906837439389762_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=fyyq4cmc5UMQ7kNvwEaMOZ5&_nc_oc=AdlI6Hsu42-7utZu0cVQ2H5YUu5au3APpbg6C7yt3dy5q6yoeP1pObFlih-ere2RvLU&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIdfHAm2dbR42T7BluO06ALavj8Ozc4nrWRX_7YTc40fq&oe=67F6A1DB" alt="Image Message" />
      </div>
      <div className="chat-overlay chat4">
        <img src="https://scontent.whatsapp.net/v/t39.8562-34/472781340_974551431241002_2872185955183231825_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=ZRl9FRSq-q0Q7kNvwH6vuYN&_nc_oc=Adk8FJ7yu80y42S-DGJh_lCd24nfIadLVt8Aaogv5oNOIcGDBPB8IWapPwQKxUYTbIw&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIRvryHtQOt9HXduVl_iU2xyHSnTTMUih1VwFpeN-XGoG&oe=67F67695" alt="Text Bubble" />
      </div>

      {/* Attribution text */}
      <p className="disclaimer">
        * Data charges may apply. Contact your provider for details.
      </p>
    </section>
  );
};

export default Hero;