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
    console.log('before', this.state.events);
      fetch(`/api/events`)
      .then(res => res.json())
      .then(events => {
         console.log('here');
        this.setState({
          events:events
        })
    console.log("after", this.state.events);
      })
  }

  render() {
     if (this.state.events.length > 0){
        console.log('feed', this.state.events);
        return (
           <div>
           <div id="container">
           <h1 className="pageheader">Event Feed</h1>
           </div>
           <FeedList
             events={this.state.events}
           />
           </div>
        )
     } else {
        return null
     }
  }


 }

export default Feed
