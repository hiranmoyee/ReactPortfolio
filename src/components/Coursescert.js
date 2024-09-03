import React from 'react';
import './Coursescert.module.css';

const Coursescert = () => {
    return (
        <div className="courses-cert-container">
            <h2>Courses & Certifications</h2>
            <ul className="courses-cert-list">
                <li>AWS Machine Learning Foundation Course from Udacity</li>
                <li>Node.js Developer Course from Udemy</li>
                <li>AI: Knowledge Representation and Reasoning from NPTEL</li>
                <li>Udacity AWS-MLE Nanodegree Course</li>
                <li>Machine Learning A-Z: Hands-On in Python & R in Data Science from Udemy</li>
            </ul>
        </div>
    );
};

export default Coursescert;
