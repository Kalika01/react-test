import React from 'react';
import MypostsContainer from './My posts/Myposts-container';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
      return (
            <div>
            <ProfileInfo profile={props.profile}/>
            <MypostsContainer store={props.store}/>
            </div>
      );
};
export default Profile;