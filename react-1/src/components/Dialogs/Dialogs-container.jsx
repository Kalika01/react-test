import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
   return{
      messagesPage: state.messagesPage
   }
};
let mapDispatchToProps = (dispatch) => {
   return{
      sendMessage: () => {
         dispatch(addMessageActionCreator());
      },
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageTextActionCreator(body));
      }
   }
}; 

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) ( Dialogs);



export default DialogsContainer;
