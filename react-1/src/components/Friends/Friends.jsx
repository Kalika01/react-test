import React from 'react';
import s from './Friends.module.css'
import { useState } from 'react';
import { setUsers } from '../redux/users-reducer';
import * as axios from "axios"

axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
.then ((response) => {
   this.props.setUsers(response.data.items);
})


const Friends = (props) => {
  

   return (
      <div className= {s.friends}>
         
         
      </div>
   );
};

export default Friends;