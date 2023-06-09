 import React from "react";
 import Profile from "../Profile";
 import * as axios from "axios";
 import { connect } from "react-redux";
 import { setUserProfile } from "../../redux/profile-reducer";
 

 class ProfileContainer extends React.Component {

  componentDidMount () {
    axios.get (`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <Profile{...this.props}  />
    )
  }
 }


 let MapStateToProps = (state) => ({
profile: state.profilePage.profile
 });
 

 export default connect (MapStateToProps, {setUserProfile}) (ProfileContainer)