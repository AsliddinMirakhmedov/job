import React from 'react'
import './Title.scss'

const Title = (props) => {
  return (
    <p className={ `title ${props.className}`}>{props.title}</p>
  )
}

export default Title