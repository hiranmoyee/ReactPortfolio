import React from 'react';
import './About.module.css';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p className="about-intro">
                I am an enthusiastic Master of Computer Applications graduate with 1 year and 8 months of experience as a Project Associate at IIT Guwahati. My expertise lies in working with Cassandra databases, Elasticsearch (Elassandra) and Laraval. I am proficient in technologies such as Node.js, JavaScript, MySQL, and MongoDB. My passion for exploring emerging technologies, web development, artificial intelligence, and contributing to open-source projects drives me to continuously learn and innovate.
            </p>
            <p className="about-specialization">
                Currently, I am specializing in React.js and advancing my full-stack development capabilities with Next.js.
            </p>
            <h3>Skills</h3>
            <div className="skills-container">
                <div className="skills-category">
                    <p>Data Engineering : Cassandra, Elasticsearch (Elassandra)</p>
                    <p>Programming: C,JavaScript, Node.js, React, TypeScript, Python, PHP</p>
                    <p>Web Development : Laravel, Django, Next.Js</p>
                    <p>Database : MySql, MongoDB, Cassandra</p>
                    <p>Other Technologies: SQL, ETL, Power BI, MSBI, SSIS</p>
                </div>
            </div>
        </div>
    );
};

export default About;
