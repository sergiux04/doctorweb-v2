import React, { useEffect, useRef } from 'react';
import './Services2.css'; // Import CSS file for styling (if needed)

const Services2Component = () => {
  const typingTextRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const servicesRefs = useRef([]);

  useEffect(() => {
    const typingTextObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypingAnimation();
          typingTextObserver.unobserve(typingTextRef.current);
        }
      });
    }, { threshold: 0.8 });

    const serviceFadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          serviceFadeInObserver.unobserve(entry.target);
        }
      });
    });

    typingTextObserver.observe(typingTextRef.current);
    serviceFadeInObserver.observe(servicesContainerRef.current);

    return () => {
      typingTextObserver.disconnect();
      serviceFadeInObserver.disconnect();
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
    <div className="container-services2">
      <h1 className="typing-text" ref={typingTextRef}>Services</h1>

      <div className="services-container" ref={servicesContainerRef}>
        <div className="services" ref={(ref) => servicesRefs.current[0] = ref}>
          <h2>General and Surgical Dentistry:</h2>
          <ul>
          <li>Regular dental check-ups and cleanings</li>
    <li>Tooth extractions</li>
    <li>Root canal therapy</li>
    <li>Dental implants</li>
    <li>Oral surgeries</li>
          </ul>
        </div>

        <div className="services" ref={(ref) => servicesRefs.current[1] = ref}>
          <h2>Cosmetic Dentistry:</h2>
          <ul>
          <li>Teeth whitening</li>
    <li>Dental veneers</li>
    <li>Composite bonding</li>
    <li>Smile makeovers</li>
    <li>Invisalign orthodontics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services2Component;
