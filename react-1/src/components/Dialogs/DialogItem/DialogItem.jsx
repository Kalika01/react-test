import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
   return(
      <div className={s.dialog}>
         <img src='https://pbs.twimg.com/media/EeWIjB-XgAIQyO_.jpg:large' /> <NavLink to={'/dialogs/' + props.id} className={s.Data}> {props.name} </NavLink>
      </div>
   )
};


export default DialogItem;