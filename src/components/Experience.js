import React from 'react';
import styles from './Experience.module.css'; // Import the CSS module

const Experience = () => {
    return (
        <div>
          <div className={styles.experienceItem}>
            <h3>Project Associate - I, OSINT Lab, IIT Guwahati</h3>
            <p><strong>August 2022 to April 2024 (1 year and 8 months)</strong></p>
            <ul>
              <li>Contributed to the development of Vishleshakee 2, a unified platform for social media content analytics.</li>
              <li>Utilized Cassandra and Elasticsearch (Elassandra) databases for efficient data storage and retrieval.</li>
              <li>Engaged in the enhancement and maintenance of the Vishleshakee social media analysis tool.</li>
              <li>Collaborated on a project funded by the Ministry of Electronics and Information Technology, Government of India.</li>
            </ul>
          </div>
          
          <div className={styles.experienceItem}>
            <h3>Programmer Analyst Trainee, Cognizant Technology Solutions</h3>
            <p><strong>February 2022 to August 2022 (7 months)</strong></p>
            <ul>
              <li>Worked with SSIS (SQL Server Integration Services).</li>
              <li>Utilized MSBI (Microsoft Business Intelligence) tools.</li>
              <li>Developed and maintained dashboards with Power BI.</li>
              <li>Created reports using SSRS (SQL Server Reporting Services).</li>
              <li>Worked with SQL for database management and querying.</li>
              <li>Leveraged Azure for cloud-based solutions.</li>
            </ul>
          </div>
   
          <div className={styles.experienceItem}>
            <h3>Q&A Expert, Chegg</h3>
            <p><strong>October 2020 – January 2022</strong></p>
            <ul>
              <li>Part-time role: solved questions and assignments related to computer science posted by students.</li>
            </ul>
          </div>
   
          <div className={styles.experienceItem}>
            <h3>Web Application Developer, CSIR-NEIST</h3>
            <p><strong>January 2019 – June 2019 (6 months)</strong></p>
            <ul>
              <li>Developed a web application for CSIR-NEIST, Jorhat titled ”Online job card and inventory system for ITES”.</li>
              <li>Used Bootstrap and PHP for development.</li>
              <li>Utilized MySQL for database management.</li>
            </ul>
          </div>
        </div>
      );
  };
export default Experience;
