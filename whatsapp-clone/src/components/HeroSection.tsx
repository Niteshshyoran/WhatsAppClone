import React from "react";
import "./HeroSection.css";

interface HeroImage {
  id: number;
  src: string;
  position: "top" | "bottom";
  style?: React.CSSProperties;
}

const heroImages: HeroImage[] = [
  {
    id: 1,
    src: "https://scontent.whatsapp.net/v/t39.8562-34/472789625_593649246596394_5449176563091833632_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=4hTjVOfmzcYQ7kNvwHB5Ghz&_nc_oc=AdlDCGfsHjpKsXCU7Pqum_HxnICpTPnXh755xKFXMDQs2xT9ThwO72CDtfcaX0991Fk&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaITc60CupRKNCU_kcLhhAFgtSlmiYOCKtZUs1oKnJAhxh&oe=67F68A9E",
    position: "top",
    style: { top: "0", left: "50%", transform: "translateX(-50%)" },
  },
  {
    id: 2,
    src: "https://scontent.whatsapp.net/v/t39.8562-34/473083383_985260680138627_8314586055954509622_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=IzlfZKZK2q8Q7kNvwEk5JIL&_nc_oc=AdlGmKL9ajA7KnR4eDwTjMqG8AkFQuER89H4XIZc8gK15Ja3HZUnbhX3_wolafvkBIY&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=70Mjl0Xg4AEHjZnxUoGkwg&oh=01_Q5AaIb_O9bmINqcRAM5VyCNESXO3IQTrc6Pw1GkgZjGB8Q1N&oe=67F6844E",
    position: "bottom",
    style: { bottom: "0", left: "50%", transform: "translateX(-50%)" },
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="hero-wrapper">
      {heroImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={`${img.position} image`}
          className={`hero-image ${img.position}`}
          style={img.style}
        />
      ))}

      <div className="hero-text">
        <h1>
          With private messaging and calling, you can <br />
          be yourself, speak freely and feel close to the <br />
          most important people in your life no matter <br />
          where they are.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
