import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  componentClicked = () => {
    console.log("clicked");
  };
  responseFacebook = (response) => {
    console.log(response);
    this.props.setFacebook(response)
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="444504393243096"
          buttonText="Facebook"
          height="50%"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div style={{ width: "50%", height: "50%" }}>{fbContent}</div>;
  }
}
