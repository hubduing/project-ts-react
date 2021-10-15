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
                        <div className="filter__stars">1 star</div>
                        <div className="filter__stars">2 star</div>
                        <div className="filter__stars">3 star</div>
                        <div className="filter__stars">4 star</div>
                        <div className="filter__stars">5 star</div>
                    </div>
                    <div className="view__all">View All</div>
                </div>
                <div className="hotels__cards container">
                    <div className="hotels__card">
                        <img src={Star1} alt="Star1" />
                        <h4>Swimming pool and beach of luxury...</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="details">
                            <p><b>$250</b> /NIGHT</p>
                            <a href="#!" className="details__link">Details</a>
                        </div>
                    </div>
                    <div className="hotels__card">
                        <img src={Star2} alt="Star2" />
                        <h4>Swimming pool and beach of luxury...</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="details">
                            <p><b>$250</b> /NIGHT</p>
                            <a href="#!" className="details__link">Details</a>
                        </div>
                    </div>
                    <div className="hotels__card">
                        <img src={Star3} alt="Star3" />
                        <h4>Swimming pool and beach of luxury...</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="details">
                            <p><b>$250</b> /NIGHT</p>
                            <a href="#!" className="details__link">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HotelStar;