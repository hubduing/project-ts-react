import React from 'react'
import './Blog.scss'
import image1 from '../../img/news-1.jpg'
import image2 from '../../img/news-2.jpg'
import image3 from '../../img/news-3.jpg'
import image4 from '../../img/news-4.jpg'

const Blog: React.FC = () => {
  return (
    <div>
      <section className="blog" id="blog">
        <div className="wrapper">
          <div className="title">Блог и новости</div>
          <div className="text">Добро пожаловать в Community Conversations, новую серию интервью с участием Бесстрашных путешественников, творческих людей и активистов нашего сообщества.</div>

          <div className="blog__box">
              <a href="#!">
                <div className="box__item">
                  <div className="card__img box-image__container ">
                    <img src={image1} alt="Banff National Park"/>
                  </div>
                  <div className="box__item-info">
                    <div className="box__title">Национальный парк Банф</div>
                    <div className="box__text">Национальный парк Банф находится в самом сердце величественных Скалистых гор в провинции Альберта и демонстрирует одни из самых красивых пейзажей Канады. Бирюзовые озера, заснеженные вершины и ледники легко доступны.</div>
                    <div className="box__label">@thomasalva_adison</div>
                  </div>
                </div>
              </a>
              <a href="#!">
                <div className="box__item ">
                  <div className="card__img box-image__container ">
                    <img src={image2} alt=""/>
                  </div>
                  <div className="box__item-info">
                    <div className="box__title">Хиросимский мир!</div>
                    <div className="box__text">Он был официально открыт для публики в августе того же года.</div>
                    <div className="box__label">@shova_bd88</div>
                  </div>
                </div>
              </a>
              <a href="#!">
                <div className="box__item ">
                  <div className="card__img box-image__container ">
                    <img src={image3} alt=""/>
                  </div>
                  <div className="box__item-info">
                    <div className="box__title">Верные молитвы!</div>
                    <div className="box__text">Главный центр паломничества индуистов, священный город.</div>
                    <div className="box__label">@adem/smith</div>
                  </div>
                </div>
              </a>
              <a href="#!">
                <div className="box__item ">
                  <div className="card__img box-image__container ">
                    <img src={image4} alt=""/>
                  </div>
                  <div className="box__item-info">
                    <div className="box__title">Разноцветные воды!</div>
                    <div className="box__text">Циклы воды и энергии, обусловленные лесным хозяйством, находятся в чистоте и гармонии.</div>
                    <div className="box__label">@jhon7leew</div>
                  </div>
                </div>
              </a>
            </div>
        </div>
      </section>
    </div>
  )
}
export default Blog