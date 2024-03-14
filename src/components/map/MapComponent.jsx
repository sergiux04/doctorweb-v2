import React, { useEffect, useRef } from 'react';
import './Map.css'; // Import CSS file for styling (if needed)

const MapComponent = () => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const typingTextObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypingAnimation();
          typingTextObserver.unobserve(typingTextRef.current);
        }
      });
    }, { threshold: 0.8 });

    typingTextObserver.observe(typingTextRef.current);

    return () => {
      typingTextObserver.disconnect();
    };
  }, []);

  const startTypingAnimation = () => {
    const textToType = typingTextRef.current.textContent.trim();
    typingTextRef.current.textContent = '';
    typeCharacters(textToType, 0);
  }

  const typeCharacters = (text, index) => {
    if (index < text.length) {
      typingTextRef.current.textContent += text.charAt(index);
      index++;
      setTimeout(() => typeCharacters(text, index), 70); // Adjust typing speed (milliseconds)
    }
  }

  return (
    <div className="container-map">
      <h1 ref={typingTextRef}>Find Us</h1>
      <iframe
        id="map"
        title="map"
        width="600"
        height="450"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194%2C37.7749%2C-122.4193%2C37.7750&amp;layer=mapnik&amp;marker=37.7749%2C-122.4194"
      ></iframe>
      <p>Visit our clinic at:</p>
      <address>
        Your Clinic Address<br />
        City, Country<br />
        ZIP Code
      </address>
    </div>
  );
}

export default MapComponent;