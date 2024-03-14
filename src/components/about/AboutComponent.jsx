import React, { useEffect, useRef } from 'react';
import './About.css'; // Import CSS file for styling (if needed)
import doctorImage from "../../assets/doctorImage.jpg"

const AboutComponent = () => {
    const textContainerRef = useRef(null);
    const imageContainerRef = useRef(null);
    const testimonialsRef = useRef([]);
  
    useEffect(() => {
      const textObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textContainerRef.current.classList.add('animate');
          }
        });
      }, { threshold: 0.5 });
  
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageContainerRef.current.classList.add('animate');
          }
        });
      }, { threshold: 0.5 });
  
      const testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.5 });
  
      textObserver.observe(textContainerRef.current);
      imageObserver.observe(imageContainerRef.current);
      testimonialsRef.current.forEach(testimonial => testimonialsObserver.observe(testimonial));
  
      return () => {
        textObserver.disconnect();
        imageObserver.disconnect();
        testimonialsRef.current.forEach(testimonial => testimonialsObserver.unobserve(testimonial));
      };
      
    }, []);
  

  return (
    <div className="container-about">
      <div className="image-container" ref={imageContainerRef}>
        <img src={doctorImage} alt="Dentist Photo" />
      </div>
      <div className="text-container" ref={textContainerRef}>
        <h1 style={{ fontSize: '50px', fontWeight: 600, background: 'linear-gradient(to left, #1a0a46, #431f66)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Meet Our Dentist</h1>
        <p>Welcome to our dental practice. Dr. [Dentist Name] is a highly skilled and experienced dentist dedicated to providing the best care for our patients. With a focus on personalized treatments, we strive to make your dental experience comfortable and effective.</p>
        <div className="testimonials-container">
          <div className="testimonial active" ref={(ref) => testimonialsRef.current[0] = ref}>
            <p>"Dr. [Dentist Name] is truly amazing. The care and attention to detail are exceptional. I highly recommend!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial" ref={(ref) => testimonialsRef.current[1] = ref}>
            <p>"I've never felt more comfortable at a dentist's office. Dr. [Dentist Name] and the staff are fantastic."</p>
            <p>- Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;