import React from 'react'
import './CommentCard.scss'
import Text from '../Text/Text.jsx'
import img from '../../images/5.png'

const CommentCard = (props) => {
  return (
    <div className='commentCard'>
      <img className='commentCard__img' src={img} alt="image" />
      <Text className='commentCard__title' text={props.title} />
      <p className='commentCard__text'>{props.text}</p>
    </div>
  )
}

export default CommentCard