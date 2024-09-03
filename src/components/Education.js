import React from 'react';
import './Education.module.css';

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-item">
                <h3>Master of Computer Applications (MCA)</h3>
                <p>Tezpur University, Assam</p>
                <p>2022</p>
            </div>
            <div className="education-item">
                <h3>Bachelor of Science in Information Technology (B.Sc IT)</h3>
                <p>Jorhat Institute of Science & Technology, Assam</p>
                <p>2019</p>
            </div>
            <div className="education-item">
                <h3>10 + 2</h3>
                <p>Sibsagar Govt. H S & M P School, Assam</p>
                <p>2016</p>
            </div>
            <div className="education-item">
                <h3>High School</h3>
                <p>Patkai Shankardev Shishu Vidya Niketan, Assam</p>
                <p>2014</p>
            </div>
        </div>
    );
};

export default Education;
