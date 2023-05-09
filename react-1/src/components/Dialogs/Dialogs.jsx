import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
   
   let state = props.messagesPage;

   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}  id={d.id} />); 
   let messagesElemets = state.messages.map(m => <Message message={m.message} id={m.id} />); 
   let newMessageText = state.newMessageText;

   let onSendMessageClick = () => {
      props.sendMessage();
}
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
}
   
   return(
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            
            {dialogsElements}
            
            </div>
            
            <div className={s.messages}>
            <div>{messagesElemets}</div>
            
            <div>
               <div>
                  <textarea
               placeholder='Enter your message'
               onChange={onNewMessageChange}
               value={newMessageText} /></div>
               <div>
                  <button onClick={onSendMessageClick} className={s.button}>send</button>
               </div>
            </div>
            
            </div>
         </div>
   );
};

export default Dialogs;