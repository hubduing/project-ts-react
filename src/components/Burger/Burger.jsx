import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Burger.scss'

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <a className="menu-item" href="#">TRAVELAND</a>
        <a className="menu-item" href="#location">Популяные места</a>
        <a className="menu-item" href="#blog">Блог</a>
        <a className="menu-item" href="#hotels">Отели</a>
        <a className="menu-item" href="#comments">О нас</a>
        <a className="menu-item" href="#contact">Контакты</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Настройки</a> */}
      </Menu>
    );
  }
}
export default Burger