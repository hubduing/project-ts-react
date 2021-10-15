import React from 'react'
import SliderHotel from '../SliderHotel/SliderHotel'
import './Hotels.scss'

export default function Hotels() {
  return (
    <div>
      <section className="hotels ptb">
        <div className="wrapper">
          <div className="hotels__box container">
            <div className="info">
              <div className="info__title">Останаливайтесь в шикарных отелях</div>
              <div className="info__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div className="hotels__location">
              <div className="hotels__guests"><span>2</span> Гостей</div>
              <div className="hotels__btn-box">
                <div className="hotels__button"> + </div>
                <div className="hotels__button"> - </div>
              </div>
              <div className="hotels__land">Австралия</div>
            </div>
          </div>
          <SliderHotel/>
        </div>
      </section>
    </div>
  )
}
