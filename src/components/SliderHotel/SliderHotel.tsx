import React from 'react'
import './SliderHotel.scss'
import image1 from '../../img/hotels/hotels-1.jpg'
import image2 from '../../img/hotels/hotels-2.jpg'
import image3 from '../../img/hotels/hotels-3.jpg'
import image4 from '../../img/hotels/hotels-4.jpg'
import image5 from '../../img/hotels/hotels-5.jpg'

export default function SliderHotel() {
  return (
    <div>
      <div className="slider__container">
        <div className="slide active" style={{backgroundImage: `url(${image1})`}}>
          <h3>Италия</h3>
        </div>
        <div className="slide " style={{backgroundImage: `url(${image2})`}}>
          <h3>Колумбия</h3>
        </div>
        <div className="slide " style={{backgroundImage: `url(${image3})`}}>
          <h3>Греция</h3>
        </div>
        <div className="slide " style={{backgroundImage: `url(${image4})`}}>
          <h3>Франция</h3>
        </div>
        <div className="slide " style={{backgroundImage: `url(${image5})`}}>
          <h3>Австралия</h3>
        </div>
      </div>
    </div>
  )
}
