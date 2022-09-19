import React from 'react'
import './СompanyNumber.scss'

const СompanyNumber = (props) => {
  return (
    <div className='СompanyNumber'>
      <h1 className="СompanyNumber__title">{props.title}</h1>
      <p className="СompanyNumber__text">{props.text}</p>
    </div>
  )
}

export default СompanyNumber