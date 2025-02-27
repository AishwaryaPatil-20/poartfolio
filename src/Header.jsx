import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linksRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // GSAP animation for menu links
    useEffect(() => {
        const tl = gsap.timeline({ ease: "Power1.easeInOut" });

        if (isMenuOpen) {
            // Animate header (logo)
            tl.from('.header h2', {
                opacity: 0,
                y: 100,
                duration: 0.5,
            })
            // Animate menu links
            .from('.header .links a', {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.5,
            });
        } else {
            // Reset animation for closing the menu
            tl.to('.header h2', {
                opacity: 0,
                y: 100,
                duration: 0.5,
            })
            .to('.header .links a', {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.5,
            })
            .to('.header h2, .header .links a', {
                clearProps: "all",
                duration: 0,
            });
        }
    }, [isMenuOpen]);

    return (
        <>
            <div className="header">
                <div className="logo">
                    <h2>Aishwarya Patil</h2>
                </div>
                <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
                <div
                    className={`links ${isMenuOpen ? 'active' : ''}`}
                    ref={linksRef}
                >
                    <a href="#home">Home</a>
                    <a href="#Academics">Academics</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Skill">Skills</a>
                    <a href="#contact">Contact-Me</a>
                </div>
            </div>
        </>
    );
}
