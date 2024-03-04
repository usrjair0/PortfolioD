import React from 'react';
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import "./index.scss";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <nav className='nav'>
      <ul className='nav__names'>
        <li><Nav.Link className='nav_Itens' href='#presentation'>Apresentação</Nav.Link></li>
        <li><Nav.Link className='nav_Itens' href='#projectSec'>Projetos</Nav.Link></li>
        <li><Nav.Link className='nav_Itens' href='#AboutMeId'>Sobre mim</Nav.Link></li>
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