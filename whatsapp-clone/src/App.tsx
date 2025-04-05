import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import CallFeatureSection from "./components/CallFeatureSection";
import EncryptionFeature from "./components/EncryptionFeature";
import SayWhatYouFeel from "./components/SayWhatYouFeel";
import FooterSection from "./components/FooterSection";
import WhatsAppUpdates from "./components/WhatsAppUpdates";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HeroSection />
      <CallFeatureSection />
      <EncryptionFeature />
      <SayWhatYouFeel />
      <WhatsAppUpdates />
      <FooterSection />
    </div>
  );
};

export default App;
