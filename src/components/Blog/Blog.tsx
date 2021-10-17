import React from 'react'
import './Blog.scss'
import image1 from '../../img/news-1.jpg'
import image2 from '../../img/news-2.jpg'
import image3 from '../../img/news-3.jpg'
import image4 from '../../img/news-4.jpg'

const Blog: React.FC = () => {
  return (
    <div>
      <section className="blog">
        <div className="wrapper">
          <div className="title">From Blog & News</div>
          <div className="text">Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community.</div>

          <div className="container blog__box">
            
            <a href="#!">
            <div className="box">
              <img src={image1} alt="Banff National Park"/>
              <div className="box__title">Banff National Park</div>
              <div className="box__text">Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible</div>
              <div className="box__label">@thomasalva_adison</div>
            </div>
            </a>
            <div className="box">
              <a href="#!">
                <div className="box__item container">
                  <img src={image2} alt=""/>
                  <div className="box__item-info">
                    <div className="box__title">The Hiroshima Peace!</div>
                    <div className="box__text">It was formally opened to the public in August that year.</div>
                    <div className="box__label">@shova_bd88</div>
                  </div>
                </div>
              </a>
              <a href="#!">
                <div className="box__item container">
                  <img src={image3} alt=""/>
                  <div className="box__item-info">
                    <div className="box__title">The faithful prayers!</div>
                    <div className="box__text">A major pilgrimage center for Hindus, the holy city.</div>
                    <div className="box__label">@adem/smith</div>
                  </div>
                </div>
              </a>
              <a href="#!">
                <div className="box__item container">
                  <img src={image4} alt=""/>
                  <div className="box__item-info">
                    <div className="box__title">Colourful waters!</div>
                    <div className="box__text">Forest-driven water and energy cycles are poorly.</div>
                    <div className="box__label">@jhon7leew</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Blog