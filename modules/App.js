import React, { Component } from 'react';
import FbButton from './fb_button.js'
import { Link } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <div className="App">
      <div className="bg"></div>
        <div className="container logo">
          <img alt="logo" className="logoScale animated bounceInLeft" src="http://i.imgur.com/NrsCPiW.png"/>
          <p className="slogan animated bounceInLeft">Curated events for a personalized calendar</p>
          <div className="fbLogin animated flipInY">
            <FbButton />
          </div>
          <footer>
            <small className="animated flipInX">&copy; 2017 eventtarget.com ALL RIGHTS RESERVED</small>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
