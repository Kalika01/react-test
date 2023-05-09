import React from 'react';
import s from'./Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {
      
      let state = props.profilePage;

      let postsElements = state.posts.map (p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />);
      let newPostText = state.newPostText;

      let onAddPostClick = () => {
            props.addPost();
      }
      let onNewPostChange = (e) => {
            let body = e.target.value;
            props.updateNewPostBody(body);
      }
      
      return (
      <div>
            <div className={s.item}>
            <h3>My posts</h3> 
            </div>
            <div className={s.item}>
                  <textarea 
                        placeholder='Enter your new post'
                        onChange={onNewPostChange}
                        value={newPostText} 
                        className={s.text}  />
                        
                  <button onClick={onAddPostClick } className={s.button}>Add post</button>
            </div>
            
            <div className={s.posts}> 
                  { postsElements }
            </div>
      </div>
      )
}
export default Myposts;