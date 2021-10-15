import React from "react";
import "./Comments.scss";
import CommentImg1 from "../../img/comments/comment-image.jpg";

const Comments: React.FC = () => {
  return (
    <section className="comments">
      <div className="wrapper">
        <div className="comments__slider">
          <div className="comments__slide">
            <div className="comments__slide-box">
              <img className="comments__image" src={CommentImg1} alt="Comment" />
            </div>
            <div className="comments__slide-box">
              <i className="far fa-comments"></i>
              <div className="comments__slide-title">Nazmul Nabeel</div>
              <div className="comments__slide-text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the ”
              </div>
            </div>
          </div>
          <div className="pagination">
            <div className="prev"></div>
            <div className="next"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Comments;