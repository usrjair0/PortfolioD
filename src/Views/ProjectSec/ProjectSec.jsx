import React from 'react';
import Projects from '../../Componentes/projects/Projects';
import './index.scss';
import dncMovie from '../../assets/DNCmovieList.png';
import ccxpDNC from '../../assets/ccxpDNC.png';
import projetoNLW from '../../assets/projetoNLW.png';
import Ecommercjs from '../../assets/Ecommercjs.png';

const ProjectSec = () => {
  return (
    <section className='section'>
      <h1>Projetos</h1>
      <div className='section__Project'>
        <Projects 
        imglink={dncMovie} 
        projectName="Projeto filmes" 
        resume="Um projeto utilizando a API do theMoviedb que consiste em um site
        que exibe filmes para o usuário de forma responsiva e mostra também alguns detalhes
        do filme, como orçamento, resumo do filme etc."
        repoGit="https://github.com/usrjair0/filmeslist"
        siteLink="https://filmeslist.vercel.app/"
        />
        <Projects 
        imglink={ccxpDNC} 
        projectName="Projeto ccxp" 
        resume="Uma landing page   utilizando um cauntdown e recursos reponsivos."
        repoGit="https://github.com/usrjair0/CCPX_DNC"
        siteLink="https://ccxpdnc.vercel.app/"
        />
        <Projects 
        imglink={projetoNLW} 
        projectName="Projeto NLW" 
        resume="Um projeto que simula uma linha do tempo no qual mantenho informações para
        manter registrado minha trajetória."
        repoGit="https://github.com/usrjair0/NLW-SpaceTime"
        siteLink="https://usrjair0.github.io/NLW-SpaceTime/"
        />
        <Projects 
        imglink={Ecommercjs} 
        projectName="Projeto E-commerc" 
        resume="Um projeto que simula um site de e-commerc com um design muito atrativo."
        repoGit="https://github.com/usrjair0/E-commerc"
        siteLink="https://e-commerc-blue.vercel.app/"
        />
      </div>
    </section>
  )
}

export default ProjectSec