import React from "react";
import "./Contacts.scss";
import Text from "../Text/Text";
import ContactsCard from "../ContactsCard/ContactsCard.jsx";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";
import img13 from "../../images/13.png";
import img14 from "../../images/14.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="contactsCards">
        <ContactsCard
          icon={img11}
          text="500 Terry Francois St. San Francisco, CA 94158"
          title="Address"
        />
        <ContactsCard icon={img12} text="123-456-7890" title="Phone" />
        <ContactsCard icon={img13} text="info@mysite.com" title="Email" />
        <ContactsCard
          icon={img14}
          text={
            <span style={{display: 'flex', gap: "10px"}}>
              <a href="#!">
                <FaFacebook style={{fontSize: "22px"}} />
              </a>
              <a href="#!">
                <FaTwitter style={{fontSize: "22px"}} />
              </a>
              <a href="#!">
                <FaLinkedin style={{fontSize: "22px"}} />
              </a>
              <a href="#!">
                <FaInstagram style={{fontSize: "22px"}} />
              </a>
            </span>
          }
          title="Connect"
          className="contactsCards__text"
        />
      </div>
    </section>
  );
};

export default Contacts;
