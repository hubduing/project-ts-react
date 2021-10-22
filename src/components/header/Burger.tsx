import React from 'react'
import './Burger.scss'

const Burger: React.FC = () => {
  return (
    <div>
      <div className="burger">
        <div className="header__nav">
          <div className="header__item"></div>
        </div>
        <div className="header__nav-close"></div>
      </div>
    </div>
  )
}
export default Burger
