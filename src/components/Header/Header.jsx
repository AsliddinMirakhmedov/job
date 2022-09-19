import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img"></div>
      <Container className="header__container">
        <div className="info">
          <h1 className="info__title">Решения для бизнеса</h1>
          <div className="info__wrapper">
            <p className="info__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              adipisci dicta excepturi! Suscipit, quis facilis. Nulla facilis
              veritatis mollitia ex voluptate cum consequatur incidunt debitis!
              Modi praesentium quo.
            </p>
            <Button title="Подробнее" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
