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
      fetch(`/api/events/binbin`, {
        credentials:'include'
      })
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
                   <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
                   <ul className="dropdown-menu">
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/category_list">Cateories</Link></li>
                     <li><Link to="/calendar">Calendar</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/">Log Out</Link></li>
                   </ul>
                 </div>
               </nav>
               <h1 className="pageheader">Event Feed</h1>
               <p className="animated bounceInLeft catSlogan">click an event to add to your calander or to subscribe to a venue</p>
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
