import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard.jsx";
import Text from "../Text/Text.jsx";
import Title from "../Title/Title.jsx";
import Container from "../Container/Container.jsx";
import "./Services.scss";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <section className="services">
        <Title className="services__title" title="УСЛУГИ" />
        <Text text="Новые горизонты вашего бизнеса" />
        <Container>
          <div className="servicesCards">
            <ServicesCard
              image={img1}
              text="Это текст. Нажмите здесь, чтобы изменить его.​"
              title="Разработка бизнес-планов"
            />
            <ServicesCard
              image={img2}
              text="Это текст. Нажмите здесь, чтобы изменить его.​"
              title="Бухгалтерские услуги"
            />
            <ServicesCard
              image={img3}
              text="Это текст. Нажмите здесь, чтобы изменить его.​"
              title="Бухгалтерские услуги"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
