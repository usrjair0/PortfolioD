import React, { useState } from 'react';
import "./index.scss";

const AboutMe = () => {

    const [progressWidth, setProgressWidth] = useState("0%");
    const [activeYear, setActiveYear] = useState('ano2022');

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
                        <li className={`step step01 ${activeYear === 'ano2022' ? 'active' : ''}`} onClick={() => handleStepClick('0%', 'ano2022')}>
                            <div className="step-inner">2022</div>
                        </li>
                        <li className={`step step02 ${activeYear === 'ano2023' ? 'active' : ''}`} onClick={() => handleStepClick('50%', 'ano2023')}>
                            <div className="step-inner">2023</div>
                        </li>
                        <li className={`step step03 ${activeYear === 'ano2024' ? 'active' : ''}`} onClick={() => handleStepClick('100%', 'ano2024')}>
                            <div className="step-inner">2024</div>
                        </li>
                    </ul>
                    <div id="line">
                        <div id='line-progress' style={{ width: progressWidth }}></div>
                    </div>
                </div>

                <div id="progress-content-section">
                    <div className={`section-content ${activeYear === 'ano2022' ? 'active' : ''}`}>
                        <h2>2022</h2>
                        <p>
                            Cursei engenharia elétrica até esse ano que foi durante o periodo da pandemia. Tive 
                            meu primeiro contato com a programação com uma matéria chamada programação avançada. Após 
                            isso eu comecei a gostar bastante da área e me identificar ao ponto de no ano seguinte
                            optar por cursar engenharia de software e evoluir na área de desenvolvimento web.
                        </p>
                    </div>
                    <div className={`section-content ${activeYear === 'ano2023' ? 'active' : ''}`}>
                        <h2>2023</h2>
                        <p>
                            No ano de 2023 comecei a estudar com materiais na internet e cursos gratuitos. Comecei um curso
                            completo de desenvolvimento full stack na escola DNC, me matriculei na faculdade no curso de 
                            engenharia de software, comecei a criar projetos e começar a me desenvolver como freelancer.
                        </p>
                    </div>

                    <div className={`section-content ${activeYear === 'ano2024' ? 'active' : ''}`}>
                        <h2>2024</h2>
                        <p>
                            Sigo estudando e me adquirindo conhecimentos na área de desenvolvimento web
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
