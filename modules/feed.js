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


  componentDidMount() {
    fetch(`/api/events`)
    .then(res => res.json())
    .then(events => {
      this.setState({
        events:events
      })
      console.log("events feed.js", this.state.events);
    })
  }

  render() {
    return (
          <div>
            <div id="container">
              <h1 className="feed">Event Feed</h1>
            </div>
            <FeedList
              events={this.state.events}
            />
          </div>
       )
  }


 }

export default Feed
