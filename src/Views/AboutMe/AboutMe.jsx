import React from 'react';
import "./index.scss";

const AboutMe = () => {
  return (
    <div className='AboutMe'>
        <h1>Sobre mim</h1>

        <div className="process-wrapper">
            <div id="progress-bar-container">
                <ul>
                    <li className='step step01 active'>
                        <div className="step-inner">2023</div>
                    </li>
                    <li className='step step02'>
                        <div className="step-inner">2024</div>
                    </li>
                </ul>
                <div id="line">
                    <div id='line-progress'></div>
                </div>
            </div>

            <div id="progress-content-section">
                <div className="section-content ano2023 active">
                    <h2>2023</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorem consequatur repellendus pariatur, voluptatibus est sed reiciendis
                        , totam vel, expedita recusandae odio numquam harum. Id impedit libero 
                        ipsam tempore laborum facere.
                    </p>
                </div>

                <div className="section-content ano2024">
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
  )
}

export default AboutMe