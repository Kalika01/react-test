import React from 'react';


const FriendsBar = (props) => {
   
   let friendsbar = props.friends.map(f => <FriendsBar name={f.name} id={f.id} />);
   return (
      <div >
         {friendsbar}
      </div>
   );
};

export default FriendsBar;