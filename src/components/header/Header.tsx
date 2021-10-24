import React from "react";
import Burger from "../Burger/Burger";
import "./Header.scss";
import '../../scroll'

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <section className="header">
      <Burger />
        <nav className="navbar">
          <div className="wrapper">
            <div className="container t-center">
              <a className="navbar__logo" href="#">
                TRAVELAND
              </a>
              <ul className="container navbar__items">
                <li className="navbar__item">
                  <a href="#location">Популяные места</a>
                </li>
                <li className="navbar__item">
                  <a href="#blog">Блог</a>
                </li>
                <li className="navbar__item">
                  <a href="#hotels">Отели</a>
                </li>
                <li className="navbar__item">
                  <a href="#comments">О нас</a>
                </li>
                <li className="navbar__item">
                  <a href="#contact">Контакты</a>
                </li>
              </ul>
              
              <button className="btn" href="#!" type="navbar__btn">
                Войти
              </button>
              
            </div>
          </div>
        </nav>

        <div className="banner">
          <div className="wrapper">
            <h1 className="header__title">
              Поездки, <br /> интересные места и отели
            </h1>
            <p className="header__text">
              Мы все хотим начать наш год как можно лучше.
            </p>
            <a href="#location" className="btn">
              В интересные места
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Header;
