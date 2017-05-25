import React from 'react'
import FeedList from './feed_list'
import { Link } from 'react-router-dom'


class Feed extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    events:[],
    venues:[]
  }
}



  componentWillMount() {
      fetch(`/api/events`)
      .then(res => res.json())
      .then(events => {
         console.log('here');
        this.setState({
          events:events
        })
      })
  }

  render() {
     if (this.state.events.length > 0){
        return (
           <div>
           <div id="container">
           <nav className="navbar">
             <Link to="/calendar" title="Calendar" className="fa fa-arrow-circle-right fa-5x navCatRight" aria-hidden="true"></Link>
             <div className="dropdown">
               <div className="bgCat"></div>
                 <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
                 <ul className="dropdown-menu">
                   <li><Link to="/home">Home</Link></li>
                   <li><Link to="/category_list">Cateories</Link></li>
                   <li><Link to="/calendar">Calendar</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="#">Log Out</Link></li>
                 </ul>
               </div>
             </nav>
           <h1 className="pageheader">Event Feed</h1>
           </div>
           <FeedList events={this.state.events} />
           </div>
        )
     } else {
        return null
     }
  }


 }

export default Feed
