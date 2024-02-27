import React from 'react';
import "./index.scss";

const Button = ({text, width}) => {
  return (
    <button className='button' style={{width: width}}>{text}</button>
  )
}

export default Button