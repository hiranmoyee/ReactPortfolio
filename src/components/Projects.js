import React from 'react';
import './Projects.module.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="project-item">
                <h3>eCommerce Platform & Social Media Website</h3>
                <p>Developed an eCommerce platform leveraging the Django framework. Also created a social media website using the same technology.</p>
            </div>
            <div className="project-item">
                <h3>Online Job Card and Inventory System</h3>
                <p>Developed a web application for CSIR-NEIST, Jorhat titled “Online Job Card and Inventory System for ITES”. Utilized Bootstrap and PHP for development and MySQL for database management.</p>
            </div>
            <div className="project-item">
                <h3>Mobile App for Retailer and Repairing Center</h3>
                <p>Created a mobile application designed for managing a retailer and repairing center. The app includes features for inventory management, order tracking, and customer support.</p>
            </div>
            <div className="project-item">
                <h3>Hostel Management System</h3>
                <p>Developed a comprehensive hostel management system to handle student admissions, room allocations, and facility management. The system includes features for reporting and communication with residents.</p>
            </div>
            <div className="project-item">
                <h3>Online Bike Sharing Demand Prediction</h3>
                <p>Implemented a demand prediction model for an online bike-sharing platform. Used machine learning techniques to predict bike demand based on various factors, improving the efficiency of the bike-sharing service.</p>
            </div>
        </div>
    );
};

export default Projects;
