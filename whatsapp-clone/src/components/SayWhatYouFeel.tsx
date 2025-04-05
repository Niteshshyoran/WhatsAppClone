import React from "react";
import "./SayWhatYouFeel.css";

const SayWhatYouFeel: React.FC = () => {
  return (
    <section className="feel-section">
      {/* Left - Mockup with Stickers */}
      <div className="image-container">
        <img
          src="https://scontent.whatsapp.net/v/t39.8562-34/409964903_7655947307754468_3960711266215354357_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=kzB3gC3Rq34Q7kNvwGN7myd&_nc_oc=AdkQZFvVusEytKoxp-4FkRNe07Adt95Wvigee4zJU4Awrw2IRkjPQWP-pIjxxgAP4ak&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaISprUoCARY_OYCqHovQ-VQDJXGYDCcZurVvtKBaSf5Vz&oe=67F68C00"
          alt="Status Sample"
          className="main-image"
        />
        <img src="https://scontent.whatsapp.net/v/t39.8562-34/311869879_1082331725759559_5382136804801289925_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=2GeScBHjNx4Q7kNvwHQ5V3S&_nc_oc=AdlUuhtqVdQgWiq38f6dDLu5lDpOibXjLZnIU1YLZ8u09tTPMldTMaHeh8kgvTD17G8&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIfqSa0lqmUqWpTYTnRcXrzZ1TeehOsnopg3EHEKwjijT&oe=67F6762F" alt="Sticker Face" className="sticker face" />
      </div>

      {/* Right - Text Content */}
      <div className="text-area">
        <h1 className="headline">Say what <br /> you feel</h1>
        <p className="subtext">
          Express yourself without words. Use stickers and GIFs or share everyday moments on Status.
          Record a voice message for a quick hello or a longer story.
        </p>
        <a href="#" className="learn-more">
          Learn more <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default SayWhatYouFeel;
