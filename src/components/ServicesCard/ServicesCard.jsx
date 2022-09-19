import React from 'react'
import './ServicesCard.scss'

const ServicesCard = (props) => {
  return (
    <div className='servicesCard'>
      <img className='servicesCard__img' src={props.image} alt="image" />
      <p className="servicesCard__title">{props.title}</p>
      <p className="servicesCard__text">{props.text}</p>
    </div>
  )
}

export default ServicesCard