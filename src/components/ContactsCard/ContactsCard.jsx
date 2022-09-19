import React from "react";
import "./ContactsCard.scss";

const ContactsCard = (props) => {
  return (
    <div className="contactsCard">
      <img className={`contactsCard__img ${props.className ? props.className : ''}`} src={props.icon} alt="" />
      <h3 className="contactsCard__title">{props.title}</h3>
      <p className="contactsCard__text">{props.text}</p>
    </div>
  );
};

export default ContactsCard;
