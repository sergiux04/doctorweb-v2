import React from 'react';
import "./Contact.css"
import doctorImage from '../../assets/doctor-contact.jpg'

function ContactComponent() {
  return (
    <div className="container-details3">
      <div className="contact-details3">
        <img className="profile-photo3" src={doctorImage} alt="Profile Photo" />

        <h1 style={{
          fontSize: '50px',
          fontWeight: 600,
          backgroundImage: 'linear-gradient(to left, #1a0a46, #431f66)',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text'
        }}>Contact Us</h1>
        <p>Feel free to reach out with any inquiries or just to say hello!</p>

        <div className="social-links3">
          <a href="https://twitter.com/your_twitter" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/your_facebook" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com/your_instagram" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="contact-info3">
          <p>Email: your_email@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
