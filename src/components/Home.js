import React from 'react';
import './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-heading">Hi, I'm Hiranmoyee Dehingia</h1>
            <p className="home-tagline">Transforming Ideas into Elegant Full-Stack Solutions with Precision</p>
            <hr className="wavy-divider" /> {/* Custom styled horizontal rule */}
            <div className="home-buttons">
                <a 
                    href="/myresumehiranmoyee.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="home-button resume-button"
                    style={{ textDecoration: 'none' }} // Inline style to ensure no underline
                >
                    Resume
                </a>
                &nbsp; {/* Adds a space between the buttons */}
                <a 
                    href="https://github.com/hiranmoyee" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="home-button github-button"
                >
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </a>
                &nbsp; {/* Adds a space between the GitHub and LinkedIn buttons */}
                <a 
                    href="https://www.linkedin.com/in/hiranmoyee-dehingia-6383641b5/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="home-button linkedin-button"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                </a>
            </div>
        </div>
    );
};

export default Home;
