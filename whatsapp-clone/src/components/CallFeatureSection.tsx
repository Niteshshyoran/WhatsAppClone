import React from "react";
import "./CallFeatureSection.css";

const CallFeatureSection: React.FC = () => {
  return (
    <section className="call-feature-wrapper">
      <div className="call-feature-text">
        <h1>Never miss a moment with voice and video calls</h1>
        <p>
          From a group call to classmates to a quick call with mom,
          feel like you’re in the same room with voice and video calls.
        </p>
        <a href="#" className="learn-more">
          Learn more <span>→</span>
        </a>
      </div>

      <div className="call-feature-image">
        <img src="https://scontent.whatsapp.net/v/t39.8562-34/472770474_998885868928301_7820026646601892106_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=FuXSVJIBVdQQ7kNvwGGBt7B&_nc_oc=AdlN34MC7E8PAwjIEfZnZuh1SHXIVeVDOOb6SVHhx-CIpGccKvuKhetFeNgSVtJK8Yo&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIV63yMhmRhtwCe4rOXPHbiJzT_5F3jbXJJjAmgztCYNB&oe=67F6959E" alt="Video Call" />
      </div>
    </section>
  );
};

export default CallFeatureSection;
