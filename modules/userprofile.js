import React from 'react';
import { Link } from 'react-router-dom'

class Userprofile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      user_category: []
    }
  }

componentWillMount(){
  let userId = document.cookie.match( /(; )?userId=([^;]*);?/ )[2]
  fetch(`/api/users/${userId}`).then((res) => {
    return res.json()
  }).then((user) => {
    this.setState({
      user: user
    })
  })
  fetch(`/api/user_category/${userId}`).then((res) => {
    return res.json()
  }).then((categories) => {
    this.setState({
      user_category: categories
    })
  })
}

  render() {
    return (

    <div className="container-fluid text center">
    <nav className="navbar">
      <div className="dropdown">
          <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
          <ul className="dropdown-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category_list">Cateories</Link></li>
            <li><Link to="/feed">Feed</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Log Out</Link></li>
          </ul>
        </div>
      </nav>
      <div className="col-md-2 col-md-offset-3 userproCon">
        <div className="panel panel-default clicable">
           <div className="panel-body">
               <div className="top-img">
                   <img className="tom top-img" src="http://i.imgur.com/OkHubaP.png"></img>
               </div>
                <h1>{this.state.user.name}</h1><br></br>
                <p>My cateories: {this.state.user_category}</p>
                </div>
            </div>
        </div>
    </div>


    );
  }
}

export default Userprofile;
