import React from 'react'
import './Location.scss'
import image_loc_1 from '../../img/land1.jpg'
import image_loc_2 from '../../img/land2.jpg'
import image_loc_3 from '../../img/land3.jpg'

const Location: React.FC = () => {
  return (
    <section className="location pt" id="location">
      <div className="wrapper">
        <div className="title">Популярные локации</div>
        <div className="text">Для каждого из нас путешествия были на первом месте. Мы годами жили как кочевники, первопроходцы и путешественники - прыгая по островам в надежде найти идеальное место</div>
        <div className="cards">
          <div className="card__item">
            <div className="card__img">
              <img src={image_loc_1} alt="Istambul"/>
            </div>
            <div className="card__label">Истамбул, Турция</div>
            <div className="card__text">Стамбул - крупный город Турции, расположенный на границе Европы.</div>
          </div>
          <div className="card__item">
            <div className="card__img">
              <img src={image_loc_2} alt="Kuala"/>
            </div>
            <div className="card__label">Куала Лумпур, Малазия</div>
            <div className="card__text">Поход из 272 шагов приведет вас в это столетие.</div>
          </div>
          <div className="card__item">
            <div className="card__img">
              <img src={image_loc_3} alt="Seoul"/>
            </div>
            <div className="card__label">Сеул, Южная Карея</div>
            <div className="card__text">Южная Корея официально Республика Корея - государство в Восточной Азии.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Location