import React from "react";
import "./About.scss";
import Title from "../Title/Title.jsx";
import Container from "../Container/Container.jsx";
import Text from "../Text/Text.jsx";

const About = () => {
  return (
    <>
      <section className="about">
        <Container className="about__wrapper">
          <Title className="about__title" title="О НАС" />
          <Text className="about__text" text="Команда лучших экспертов" />
          <p className="about__text__info">
            Это текст. Вы можете перетащить его в любое место на странице.
            Нажмите один раз и выберите «Редактировать текст» или просто нажмите
            дважды, чтобы добавить свой текст и настроить шрифт. Здесь будет
            удачно смотреться текст о вашей компании и услугах.
            <br />
            <br />
            Используйте эту возможность, чтобы выгодно представить себя и свою
            компанию клиентам. Расскажите о себе. Напишите интересную историю,
            например, как вам в голову пришла идея собственного дела, и
            объясните, в чем заключается ваше преимущество перед конкурентами.
            Используйте ключевые слова, по которым сайт найдут в поисковых
            системах.
          </p>
        </Container>
        <div className="about__img"></div>
      </section>
    </>
  );
};

export default About;
