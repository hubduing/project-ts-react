import React from 'react'
import './Service.scss'

const Service: React.FC = () => {
  return (
    <div>
      <section className="service ptb">
        <div className="wrapper">
          <h2 className="title">Facilities & Service</h2>
          <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          <div className="service__items container">
            <div className="container service__item">
              <i className="fas fa-desktop"></i>
              <h2 className="service__item-title">Private Workspace</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>     
            <div className="container service__item">
              <i className="fas fa-parking"></i>
              <h2 className="service__item-title">Parking Area</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>        
            <div className="container service__item">
              <i className="fas fa-wifi"></i>
              <h2 className="service__item-title">Free Wifi</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>        
            <div className="container service__item">
              <i className="fas fa-coffee"></i>
              <h2 className="service__item-title">Breakfast</h2>
              <p className="service__item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>               
          </div>
        </div>
      </section>
    </div>
  )
}
export default Service