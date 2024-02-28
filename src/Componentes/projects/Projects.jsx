import React from 'react'
import Button from '../Button/Button'
import './index.scss'

const Projects = ({imglink, projectName, resume, repoGit, siteLink}) => {
  return (
    <div className='card'>
        <div className='card__Img'>
          <a href={repoGit} target='_blank'>
            <img src={imglink} alt="projeto" />
          </a>
        </div>
        <div className='card__Resume'>
          <h1>{projectName}</h1>
          <p>{resume}</p>
        </div>
        <div className='card__button'>
          <a href={siteLink} target='_blank'>
            <Button text="clique aqui" width="120px"/>
          </a>
        </div>
      </div>
  )
}

export default Projects