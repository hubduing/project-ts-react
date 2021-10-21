import React from "react";
import './HotelStar.scss'
import Star1 from '../../img/star/star-1.jpg'
import Star2 from '../../img/star/star-2.jpg'
import Star3 from '../../img/star/star-3.jpg'

const HotelStar: React.FC = () => {
    return (
        <section className="stars ptb">
            <div className="wrapper">
                <div className="title">Самые лучшие отели</div>
                <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>        
                <div className="filter">
                    <div className="filter__box">
                        <div className="filter__stars">1 звезда</div>
                        <div className="filter__stars">2 звезда</div>
                        <div className="filter__stars">3 звезда</div>
                        <div className="filter__stars">4 звезда</div>
                        <div className="filter__stars">5 звезда</div>
                    </div>
                    <div className="view__all">Показать всё</div>
                </div>
                <div className="hotels__cards container">
                    <div className="hotels__card">
                        <img src={Star1} alt="Star1" />
                        <h4>Плавательный бассейн и роскошный пляж ...</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="details">
                            <p><b>$250</b> /Ночь</p>
                            <a href="#!" className="details__link">Подробнее</a>
                        </div>
                    </div>
                    <div className="hotels__card">
                        <img src={Star2} alt="Star2" />
                        <h4>Раскошные виды с высоты птичьего полета</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="details">
                            <p><b>$250</b> /Ночь</p>
                            <a href="#!" className="details__link">Подробнее</a>
                        </div>
                    </div>
                    <div className="hotels__card">
                        <img src={Star3} alt="Star3" />
                        <h4>Теплый ветер и шикарные пляжи...</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="details">
                            <p><b>$250</b> /Ночь</p>
                            <a href="#!" className="details__link">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HotelStar;