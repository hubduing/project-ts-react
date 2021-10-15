import React from "react";
import Burger from "./Burger";
import './Header.scss'

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <section className="header">
        <div className="wrapper">
          <nav className="navbar">
            <div className="container">
              <a className="navbar__logo" href="#!">TRAVELAND</a>
              <ul className="navbar__items container">
                <li className="navbar__item"><a href="#!">Домашняя</a></li>
                <li className="navbar__item"><a href="#!">Популяные места</a></li>
                <li className="navbar__item"><a href="#!">Блог</a></li>
                <li className="navbar__item"><a href="#!">О нас</a></li>
                <li className="navbar__item"><a href="#!">Контакты</a></li>
              </ul>
              <Burger/>
              <a className="btn" href="#!" type="navbar__btn">Регистрация</a>
            </div>
          </nav>
          <h1 className="header__title">Поездки, <br/> интересные места и отели</h1>
          <p className="header__text">Мы все хотим начать наш год как можно лучше.</p>
          <a href="#!" className="btn">В интересные места</a>
        </div>
      </section>
    </React.Fragment>
  )
}
export default Header