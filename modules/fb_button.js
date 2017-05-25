import React from "react"
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom'
// import $ from 'jquery'



export default class FbButton extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isSignedIn: false,
      isFirstTime: false
    }
  }

renderRedirect(){
  if (this.state.isSignedIn) {
    if (this.state.isFirstTime) {
      return(
        <Redirect to='/category_list'></Redirect>
      )
    } else {
      return(
        <Redirect to='/category_list'></Redirect>
      )
    }
  }
}

  render() {


    return (
      <div>
        {this.renderRedirect()}
        <div className="App-header">
        </div>
        <FacebookLogin
          appId="100128700575722"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.handleClicked}
          callback={this.responseFacebook.bind(this)} />
      </div>
    )
  }

  handleClicked() {
    // console.log("WE ARE HERE");
  }

  responseFacebook(response) {
    console.log("THIS IS THE FUCKING RESPONSE")
    console.log(response);

    let body = {
      name: response.name,
      email: response.email,
      user_id: response.id
    }

    fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(user => {
      console.log("I AME HERE");
      console.log(user);
      document.cookie = `userId = ${user.id}`
      if (user.firstTime) {
        this.setState({
          isSignedIn: true,
          isFirstTime: true
        })
      } else {
        this.setState({
          isSignedIn: true
        })
      }

    })


  }

}
