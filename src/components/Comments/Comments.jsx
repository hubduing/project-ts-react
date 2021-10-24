import React from "react";
import "./Comments.scss";


import { useSelector, useDispatch } from "react-redux";
import { setIncrease, setDecrease } from "../../actions/Actions";
import SLIDES from '../const/slides'

const Corousel = () => {
  const position = useSelector((state) => state.slider);
  const dispath = useDispatch();

  const next = () => dispath(setIncrease(position + 1));
  const prev = () => dispath(setDecrease(position - 1));

  return (
    <section className="comments" id="comments">
      <div className="wrapper">
        <div className="comments__slider">
          <div className="arrow" onClick={prev}>
            &#60;
          </div>
          <div className={SLIDES[position][3]}>
            <div className="comments__slide-image">
              <img
                className="comments__image"
                src={SLIDES[position][0]}
                alt="Comment"
              />
            </div>
            <div className="comments__slide-box">
              <i className="far fa-comments"></i>
              <div className="comments__slide-title">{SLIDES[position][1]}</div>
              <div className="comments__slide-text">{SLIDES[position][2]}</div>
            </div>
          </div>
          <div className="arrow" onClick={next}>
            &#62;
          </div>
        </div>
      </div>
    </section>
  );
};
export default Corousel;
