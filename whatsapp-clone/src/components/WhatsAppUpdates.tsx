import React, { useRef } from "react";
import "./WhatsAppUpdates.css";

const updates = [
  {
    title: "Turn Up the Volume: Add Music to Your WhatsApp Status!",
    description:
      "WhatsApp Status has always been a way to share life’s moments with friends and family—but what’s a moment without the perfect soundtrack? Now, you can do exactly that by...",
  },
  {
    title: "Chat themes to reflect your style",
    description:
      "You asked for it. Here it is! We’re introducing chat themes, so you can make your chats uniquely yours with colorful chat bubbles and new wallpapers.",
  },
  {
    title: "New year, new ways to chat on WhatsApp",
    description:
      "We’re always working on making WhatsApp easier to use and more fun, so we’re excited to kick off the new year with a variety of new features and design improvements.",
  },
  {
    title: "Improved calling on WhatsApp this holiday season",
    description:
      "Calling on WhatsApp continues to grow in popularity around the world. Now, over 2 billion calls are made on WhatsApp every single day. Ahead of the holiday season, we’re..",
  },
  {
    title: "Introducing Voice Message Transcripts",
    description:
      "Sending a voice message makes connecting with friends and family even more personal. There’s something special about hearing your loved one’s voice even when you’re far away....",
  },
];

const WhatsAppUpdates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 330; // Width of one card + margin
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="updates-wrapper">
      <div className="updates-text">
        <h1 className="updates-title">Stay up to date</h1>
        <p className="updates-subtitle">
          Get the latest from WhatsApp: news, useful tips, and our newest features
          to help you stay connected.
        </p>
      </div>
      <div className="slider-section">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
        <div className="updates-cards" ref={scrollRef}>
          {updates.map((item, index) => (
            <div className="update-card" key={index}>
              <div className="whatsapp-icon">🟢</div>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
  );
};

export default WhatsAppUpdates;