import React from 'react'
import Title from '../Title/Title'
import Container from '../Container/Container'
import './Clients.scss'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import img9 from '../../images/9.png'
import img10 from '../../images/10.png'

const Clients = () => {
  return (
    <section id='clients' className="clients">
      <Title title="НАШИ КЛИЕНТЫ" className="black clients__text" />
      <Container>
        <div className="clients__images">
          <img src={img6} alt="" className="clients__img" />
          <img src={img7} alt="" className="clients__img" />
          <img src={img8} alt="" className="clients__img" />
          <img src={img9} alt="" className="clients__img" />
          <img src={img10} alt="" className="clients__img" />
        </div>
      </Container>
    </section>
  )
}

export default Clients