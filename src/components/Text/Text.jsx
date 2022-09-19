import React from 'react'
import './Text.scss'

const Text = (props) => {
  return (
    <p className={`text ${props.className ? props.className : ''}`}>{props.text}</p>
  )
}

export default Text