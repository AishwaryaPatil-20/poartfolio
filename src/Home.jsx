import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css';

export default function Home() {
  useEffect(() => {
    // Animation for the banner with scale, rotation, and left-right motion
    gsap.fromTo(
      '.banner',
      {
        x: -200, // Start from the left off-screen
        opacity: 0,
        scale: 0.8, // Slightly smaller scale for more impact
        rotation: -15, // Slight rotation for dynamic effect
      },
      {
        x: 0, // Move to the original position
        opacity: 1,
        scale: 1, // Reset to original scale
        rotation: 0, // Reset the rotation
        duration: 1.5, // Longer duration for a smooth effect
        ease: 'power3.out',
        delay: 0.3, // Delay to create a smooth staggered effect
      }
    );

    // Animation for the buttons and icons (slide in from the right with a delay)
    gsap.fromTo(
      '.button-icon',
      {
        x: 200,
        opacity: 0,
        scale: 0.8,
        rotation: 15,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6, // Delay to make this animation appear after the banner
      }
    );

    // Animation for the image section (with a slight up/down motion)
    gsap.fromTo(
      '.img',
      {
        y: 100,
        opacity: 0,
        scale: 1.2,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.9,
      }
    );
  }, []);

  return (
    <>
      <div className="Home" id="home">
        <div className="banner">
          <h3>Hello, I am Aishwarya Patil</h3>
          <p>
            I am a <span>Full-Stack Web Developer</span> with a strong background in both <span>front-end and back-end technologies</span>. I specialize in building dynamic, responsive web applications using HTML, CSS, JavaScript, and modern frameworks like React, Angular, and Next.js. On the server side, I’m proficient in Node.js, Java, Python, and database management with MongoDB and SQL.
          </p>
          <div className="button-icon">
            <a href="https://drive.google.com/file/d/1cjbBEGcTRooNSOgYl0s7XcZoMdpdsyxE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="Resume">Resume</button>
            </a>
            <a href="https://www.linkedin.com/in/aishwarya-patil-8b11a827b" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/AishwaryaPatil-20" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="img"></div>
      </div>
    </>
  );
}
