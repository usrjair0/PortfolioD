import React from 'react';
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import "./index.scss";

function Navbar() {
  return (
    <nav className='nav'>
      <ul className='nav__names'>
        <li>Projetos</li>
        <li>Tecnologias</li>
        <li>Sobre mim</li>
      </ul>
      <ul className='nav__images'>
        <li>
          <img src={github} alt="github icon"/>
        </li>
        <li>
          <img src={linkedin} alt="github icon"/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar