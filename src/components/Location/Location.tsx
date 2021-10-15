import React from 'react'
import './Location.scss'
import image_loc_1 from '../../img/land1.jpg'
import image_loc_2 from '../../img/land2.jpg'
import image_loc_3 from '../../img/land3.jpg'

const Location: React.FC = () => {
  return (
    <section className="location pt">
      <div className="wrapper">
        <div className="title">Popular Location</div>
        <div className="text">For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and voyagers— from island hopping in the</div>
        <div className="cards">
          <div className="card__item">
            <div className="card__img">
              <img src={image_loc_1} alt="Istambul"/>
            </div>
            <div className="card__label">Istanbul, Turkey</div>
            <div className="card__text">Istanbul is a major city in Turkey that straddles Europe. </div>
          </div>
          <div className="card__item">
            <div className="card__img">
              <img src={image_loc_2} alt="Kuala"/>
            </div>
            <div className="card__label">Kuala Lumpur, malaysia</div>
            <div className="card__text">A 272-step long trek leads you to this century.</div>
          </div>
          <div className="card__item">
            <div className="card__img">
              <img src={image_loc_3} alt="Seoul"/>
            </div>
            <div className="card__label">Seoul, South Korea</div>
            <div className="card__text">South Korea officially the Republic of Korea is a country in East Asia.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Location