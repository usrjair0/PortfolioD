import React from 'react';
import "./index.scss";
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import imagem from '../../assets/imagem.svg';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__Content'>
            <div className='footer__Itens'>
                <div className="footer__Contacts">
                    <div className='footer__PhoneNumber'>
                        <h4>Meu contato (whatsapp):</h4>
                        <h5>(84)98604-8955</h5>
                    </div>

                    <div className='footer__Mail'>
                        <h4>E-mail:</h4>
                        <h5>juniorsilvasobrinho1999@gmail.com</h5>
                    </div>
                </div>

                <div className="footer__Links">
                    <div className='footer__Links'>
                        <a href="https://github.com/usrjair0" target='_blank'><img src={github} alt="github" width={'30px'}/></a>
                        <a href="https://www.linkedin.com/in/jairosilva1a/" target='_blank'><img src={linkedin} alt="linkedin" width={'30px'}/></a>
                        <img src={imagem} alt="imagemError" width={'40px'}/>
                    </div>
                </div>
            </div>     
        </div>
    </footer>
  )
}

export default Footer