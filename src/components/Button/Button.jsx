import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <a className='button' href="#!">
      {props.title}
    </a>
  )
}

export default Button