import React, { useState } from 'react';
import "./index.scss";

const AboutMe = () => {
    const [progressWidth, setProgressWidth] = useState('3%');
    const [activeYear, setActiveYear] = useState('ano2023');

    const handleStepClick = (width, year) => {
        setProgressWidth(width);
        setActiveYear(year);
    };

    return (
        <div className='AboutMe'>
            <h1>Sobre mim</h1>

            <div className="process-wrapper">
                <div id="progress-bar-container">
                    <ul>
                        <li className={`step step01 ${activeYear === 'ano2023' ? 'active' : ''}`} onClick={() => handleStepClick('3%', 'ano2023')}>
                            <div className="step-inner">2023</div>
                        </li>
                        <li className={`step step02 ${activeYear === 'ano2024' ? 'active' : ''}`} onClick={() => handleStepClick('25%', 'ano2024')}>
                            <div className="step-inner">2024</div>
                        </li>
                    </ul>
                    <div id="line">
                        <div id='line-progress' style={{ width: progressWidth }}></div>
                    </div>
                </div>

                <div id="progress-content-section">
                    <div className={`section-content ${activeYear === 'ano2023' ? 'active' : ''}`}>
                        <h2>2023</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem consequatur repellendus pariatur, voluptatibus est sed reiciendis
                            , totam vel, expedita recusandae odio numquam harum. Id impedit libero
                            ipsam tempore laborum facere.
                        </p>
                    </div>

                    <div className={`section-content ${activeYear === 'ano2024' ? 'active' : ''}`}>
                        <h2>2024</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem consequatur repellendus pariatur, voluptatibus est sed reiciendis
                            , totam vel, expedita recusandae odio numquam harum. Id impedit libero
                            ipsam tempore laborum facere.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
