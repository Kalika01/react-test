import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
      return (
            <div>
                  <div className={s.item}>
                  <img src="https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg" alt="" />
                  {props.message}
                  </div>
                  <div>
                  <span className={s.like}> <img src="https://cdn-icons-png.flaticon.com/512/686/686339.png" alt="" /> like {props.likesCount}</span>
                  </div>
            </div >
      )
}
export default Post;