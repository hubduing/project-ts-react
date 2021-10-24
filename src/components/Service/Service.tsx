import React from 'react'
import './Service.scss'

const Service: React.FC = () => {
  return (
    <div>
      <section className="service ptb">
        <div className="wrapper">
          <h2 className="title">Услуги и сервис</h2>
          <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          <div className="container service__items">
            <div className="container service__item">
              <i className="fas fa-desktop"></i>
              <h2 className="service__item-title">Частное рабочее место</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>     
            <div className="container service__item">
              <i className="fas fa-parking"></i>
              <h2 className="service__item-title">Парковка</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>        
            <div className="container service__item">
              <i className="fas fa-wifi"></i>
              <h2 className="service__item-title">Бесплатный Wifi</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>        
            <div className="container service__item">
              <i className="fas fa-coffee"></i>
              <h2 className="service__item-title">Завтраки</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>               
          </div>
        </div>
      </section>
    </div>
  )
}
export default Service