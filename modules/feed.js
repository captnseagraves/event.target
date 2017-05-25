import React from 'react'
import FeedList from './feed_list'


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
             <a href="/calendar" title="Calendar" className="fa fa-arrow-circle-right fa-5x navCatRight" aria-hidden="true"></a>
             <div className="dropdown">
               <div className="bgCat"></div>
                 <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
                 <ul className="dropdown-menu">
                   <li><a href="/home">Home</a></li>
                   <li><a href="/category_list">Cateories</a></li>
                   <li><a href="/calendar">Calendar</a></li>
                   <li><a href="/about">About</a></li>
                   <li><a href="#">Log Out</a></li>
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
