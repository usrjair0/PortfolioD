import React from 'react';
import "./index.scss"
import { useEffect, useState } from 'react'
import Button from '../../Componentes/Button/Button';

const Presentation = () => {
  const [text, settext] = useState('');
    const toRotate = ['Me chamo Jairo!  ', 'Sou Desenvolvedor Front End!  ', 'Sou Desenvolvedor web!  '];
    const [loop, setloop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const period = 130;
    const [delta, setdelta] = useState(130);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text]);
    const toType = () => {
        let i = loop % toRotate.length; // isso limita meu i a um valor entre 0 e 2 no máximo
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        settext(updatedText);
        if (!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setdelta(period)

        } else if (isDeleting && updatedText === '') {
            setisDeleting(false);
            setdelta(period);
            setloop(loop + 1);
        } else if (isDeleting && updatedText !== '') {
            setdelta(70);
        }
    }
  return (
    <main className="main">
        <h1>{text}</h1>
        <div className="main__text">
          <h3>
          Sou desenvolvedor e estudante de engenharia de software apaixanado por programação. 
          Neste porfólio deixo registrados alguns dos meus trabalhos para que você possa conferir.
          Se meu trabalho te interessar, sinta-se a vontade para entrar em contato comigo
          </h3>
          <div className='main__text__button'>
            <Button text="Saber mais" width="200px"/>
          </div>
        </div>
    </main>
  )
}

export default Presentation