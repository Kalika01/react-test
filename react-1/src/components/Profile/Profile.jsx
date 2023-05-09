import React from 'react';
import MypostsContainer from './My posts/Myposts-container';
import s from'./Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
      return (
            <div>
            <ProfileInfo/>
            <MypostsContainer store={props.store}/>
            </div>
      );
};
export default Profile;