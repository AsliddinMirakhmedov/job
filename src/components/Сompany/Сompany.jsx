import React from "react";
import Text from "../Text/Text";
import Container from "../Container/Container";
import "./Сompany.scss";
import СompanyNumber from "../СompanyNumber/СompanyNumber.jsx";

const Сompany = () => {
  return (
    <section className="Сompany">
      <Text
        className="white Сompany__text"
        text="Наша компания: цифры и факты"
      />
      <Container className="Сompany__container">
        <div className="СompanyNumbers">
          <СompanyNumber title="15" text="лет опыта" />
          <СompanyNumber title="36" text="экспертов" />
          <СompanyNumber title="120" text="клиентов ежегодно" />
          <СompanyNumber title="9" text="партнеров" />
        </div>
      </Container>
    </section>
  );
};

export default Сompany;
