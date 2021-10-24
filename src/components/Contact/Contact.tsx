import React from "react";
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__box">
          <h2 className="contact__title">
            Связаться со мной можно по электронной почте: {" "}
            <strong>ablogmount@gmail.com, redpendalff@gmail.com</strong>
          </h2>
          <p className="contact__text">
            Телеграм: <strong>https://t.me/AlexeyBV</strong> <br/>
            Скайп: <strong>https://join.skype.com/invite/MvUNNyHJ4is6</strong>
            {" "}
          </p>
        </div>
        <i className="fas fa-envelope-open-text"></i>
        {/* <img src={my} alt="me" /> */}
      </div>
    </div>
  );
};
export default Contact;
