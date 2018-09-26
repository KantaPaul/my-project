import React from 'react';
import comment from './comments.less';
import SingleComment from './singleCooment';
import bootstrap from '../assets/styles/bootstrap.less';

let myComment = () => {
  return (
    <div className={comment.commentWraper}>
      <h3 className={comment.title}>Discuss this task</h3>
      <div className={comment.coomentArea}>
        <SingleComment img={require('../assets/images/avatar/avatar-big-1.png')} title="John Dus" time="12 Minutes ago" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        <div className={comment.addCommentArea}>
        <div className={comment.singleComment}>
            <div className={comment.avatar}>
              <img src={require('../assets/images/avatar/avatar-big-2.png')} alt="avatar big" />
            </div>
            <div className={comment.coomentContent}>
              <div className={bootstrap.inputGroup}>
                <input type="text" className={bootstrap.formControl} placeholder="Description" />
                <div className={bootstrap.inputGroupAppend}>
                  <span className={bootstrap.inputGroupText}>
                    <img src={require('../assets/icons/happy-face.png')} alt="pencil" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default myComment;