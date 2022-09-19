import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import "./Navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const [navbar__right, setNavbar__right] = useState("navbar__right");
  const [navbar, setNavbar] = useState("nav");

  const menuClick = () => {
    setMenu("menu active");
    setNavbar__right("navbar__right active");
    setTimeout(() => {
      setNavbar("nav overflow");
    }, 1);
    if (menu === "menu active") {
      setMenu("menu");
      setNavbar__right("navbar__right");
      setTimeout(() => {
        setNavbar("nav");
      }, 1000);
    } else {
      setTimeout(() => {
        setNavbar("nav overflow");
      }, 100);
    }
  };

  return (
    <div className={navbar}>
      <Container>
        <nav className="navbar">
          <div className="logo">
            <a href="/">
              <h1>БизнесАс</h1>
            </a>
          </div>
          <div className={navbar__right}>
            <ul className="list">
              <li>
                <a href="#header" id="active" className="link">
                  Главная
                </a>
              </li>
              <li>
                <a href="#services" className="link">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#about" id="" className="link">
                  О нас
                </a>
              </li>
              <li>
                <a href="#comment" id="" className="link">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#clients" id="" className="link">
                  Клиенты
                </a>
              </li>
              <li>
                <a href="#contacts" className="link">
                  Контакты
                </a>
              </li>
            </ul>
            <Button title="Позвонить" />
          </div>
          <a href="#!" className={menu} onClick={menuClick}>
            <span className="menu__item"></span>
            <span className="menu__item"></span>
            <span className="menu__item"></span>
            <span className="menu__item"></span>
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
