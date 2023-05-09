import React from 'react';
import s from './Friends.module.css'
import FriendsBar from './FriendsBar';

const Friends = (props) => {
   let friendsbar = props.friends.map(f => <FriendsBar name={f.name} id={f.id} />);

   return (
      <div className= {s.friends}>
         
         {friendsbar}
      </div>
   );
};

export default Friends;