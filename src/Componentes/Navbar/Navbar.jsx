import React from 'react';
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import "./index.scss";

function Navbar() {
  return (
    <header className='header'>
      <ul className='header__names'>
        <li>Projetos</li>
        <li>Tecnologias</li>
        <li>Sobre mim</li>
      </ul>
      <ul className='header__images'>
        <li>
          <img src={github} alt="github icon"/>
        </li>
        <li>
          <img src={linkedin} alt="github icon"/>
        </li>
      </ul>
    </header>
  )
}

export default Navbar