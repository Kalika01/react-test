import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/profile-reducer';
import Myposts from './Myposts';


let mapStateToProps = (state) => {
            return{
                  profilePage: state.profilePage
            }
      };
let mapDispatchToProps = (dispatch) => {
      return {
            updateNewPostBody: (body) => {
            dispatch(updateNewPostTextActionCreator(body));
            },
            addPost: () => {
            dispatch(addPostActionCreator());
            }
      }
};
            
const MypostsContainer = connect(mapStateToProps, mapDispatchToProps) (Myposts);


export default MypostsContainer;