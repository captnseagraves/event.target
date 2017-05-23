import React, { Component } from 'react';
import FbButton from './fb_button.js'
// import '../public/App.css';
import { Link } from 'react-router-dom'

class App extends Component {


  render() {

    return (
      <div className="App">
        <div className="container logo">
          <img alt="logo" className="logoScale animated bounceInLeft" src="http://i.imgur.com/ygBoDVQ.png"/>
          <p className="slogan animated bounceInLeft">Curated events for a personalized calendar.</p>
          <div className="fbLogin animated flipInY">
            <FbButton/>
          </div>
          <footer>
            <small className="animated flipInY">&copy; 2017 theHAPP.COM ALL RIGHTS RESERVED</small>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
