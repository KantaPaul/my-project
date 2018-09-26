import React from 'react';
import comment from './comments.less';

let singleComment = (props) => {
  return (
    <div className={comment.singleComment}>
      <div className={comment.avatar}>
        <img src={props.img} alt="avatar big" />
      </div>
      <div className={comment.coomentContent}>
        <div className={comment.commentorBio}>
          <span className={comment.commentorTitle}>{props.title}</span>
          <span className={comment.commentorTime}>{props.time}</span>
        </div>
        <p>{props.desc}</p>
        <a href="$" className={comment.commentLink}>Reply</a>
      </div>
    </div>
  )
}

export default singleComment;