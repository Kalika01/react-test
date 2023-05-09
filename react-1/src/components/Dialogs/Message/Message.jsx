import React from 'react';
import s from './../Dialogs.module.css';



const Message =(props) => {
   
   return(
      <div>
         <div className={s.message}> {props.message}  <img src="https://ouch-cdn2.icons8.com/cBvmuAB6k_-6iE-_SMo76-gHiS0UMky4zGIaaxeMv8Q/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTc5/LzhkMjhmMTMzLWUz/OTctNDUyZS1hNmIz/LTQ1Zjg3NzJmNjdm/MC5zdmc.png" /> </div>
      <div className={s.otstup}></div>
      </div >
   )
};



export default Message;