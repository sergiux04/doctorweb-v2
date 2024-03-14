import React, { useEffect, useRef } from 'react';
import './About2.css'; // Import CSS file for styling (if needed)

const About2Component = () => {
  const typingTextRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const typingTextObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypingAnimation();
          typingTextObserver.unobserve(typingTextRef.current);
        }
      });
    }, { threshold: 0.8 });

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageContainerRef.current.classList.add('animate');
        }
      });
    }, { threshold: 0.8 });

    typingTextObserver.observe(typingTextRef.current);
    imageObserver.observe(imageContainerRef.current);

    return () => {
      typingTextObserver.disconnect();
      imageObserver.disconnect();
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
    <div className="container-about2">
      <h1 className="typing-text" ref={typingTextRef}>Why Choose Dr. Shannons</h1>

      <div className="statements-container">
        <div className="statement">
          <h2>Expertise</h2>
          <p>Share what makes your business unique to set you apart from your competition.</p>
        </div>

        <div className="statement">
          <h2>Philosophy</h2>
          <p>Share what makes your business unique to set you apart from your competition.</p>
        </div>

        <div className="statement">
          <h2>Technology</h2>
          <p>Share what makes your business unique to set you apart from your competition.</p>
        </div>
      </div>

      <div className="image-container" ref={imageContainerRef}>
        {/* Your image goes here */}
      </div>
    </div>
  );
}

export default About2Component;
