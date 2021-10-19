import React from 'react'
import SliderHotel from '../SliderHotel/SliderHotel'
import './Hotels.scss'
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "../../actions/Actions";

export default function Hotels() {

  const counter = useSelector(state => state.counter);
  const dispath = useDispatch();
  const inc = () => dispath(setIncrement());
  const dec = () => dispath(setDecrement());
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
              <div className="hotels__guests">Количество гостей &ensp;{counter}&ensp;
                <div className="hotels__btn-box">
                  <div className="hotels__button" onClick={inc}> + </div> &ensp;
                  <div className="hotels__button" onClick={dec}> - </div>
                </div>
              </div>
              <div className="hotels__price">{counter * 250} $</div>
              <div className="hotels__land">Австралия</div>
            </div>
          </div>
          <SliderHotel/>
        </div>
      </section>
    </div>
  )
}
