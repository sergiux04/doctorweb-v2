import React, { useEffect } from 'react';
import video from "../../assets/video.mp4";
// import Video from './Video';
import './introduction.css'
import Header from './Header';

function Introduction() {
    useEffect(() => {
        const servicesH1 = document.querySelector('.right h2');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startTypingAnimation();
                    observer.unobserve(servicesH1);
                }
            });
        }, { threshold: 0.8 });

        observer.observe(servicesH1);

        function startTypingAnimation() {
            const textToType = servicesH1.textContent.trim();
            servicesH1.textContent = '';
            typeCharacters(textToType, 0);
        }

        function typeCharacters(text, index) {
            if (index < text.length) {
                servicesH1.textContent += text.charAt(index);
                index++;
                setTimeout(() => typeCharacters(text, index), 100); // Adjust typing speed (milliseconds)
            }
        }
    }, []);

    return (
        <>
        <Header></Header>
            <video className=".video" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
         <div>
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <h1 className='h11'>Dr. Keith Shannons</h1>
                    <h2 className='h22'>Doctor of Dental Medicine</h2>
                    <p className='p11'>Dr. Shannons has over 10 years of experience in dentistry. He is committed to providing personalized care to his clients, and keeping his practice up-to-date with the latest research and technology in the field.</p>
                    <button>Book a Consult</button>
                </div>
            </div>
           </div>
        </>
    );
}

export default Introduction;