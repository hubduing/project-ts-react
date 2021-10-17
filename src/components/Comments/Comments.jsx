import React from "react";
import "./Comments.scss";
import CommentImg1 from "../../img/comments/comment-image-1.jpg";
import CommentImg2 from "../../img/comments/comment-image-2.jpg";
import CommentImg3 from "../../img/comments/comment-image-3.jpg";

import { useSelector, useDispatch } from "react-redux";
import { setIncrease, setDecrease } from "../../actions/Actions";

const Corousel = () => {
  const position = useSelector((state) => state);
  const dispath = useDispatch();

  const next = () => dispath(setIncrease(position + 1));
  const prev = () => dispath(setDecrease(position - 1));

  const images = [
    [
      CommentImg1,
      "Nazmul Nabeel",
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ”",
    ],
    [
      CommentImg2,
      "Camel Case",
      "“Lorem ipsum dolor sit amet.”",
    ],
    [
      CommentImg3,
      "Orange Tox",
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nam! ”", 
    ]
  ];

  return (
    <section className="comments">
      <div className="wrapper">
        <div className="comments__slider">
          <div className="arrow" onClick={prev}>
            &#60;
          </div>
          <div className="comments__slide">
            <div className="comments__slide-image">
              <img
                className="comments__image"
                src={images[position][0]}
                alt="Comment"
              />
            </div>
            <div className="comments__slide-box">
              <i className="far fa-comments"></i>
              <div className="comments__slide-title">{images[position][1]}</div>
              <div className="comments__slide-text">{images[position][2]}</div>
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
