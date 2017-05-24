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
        this.setState({
          events:events
        })
    console.log("after", this.state.events);
      })
  }
  // <FeedList
  //   events={this.state.events}
  // />
  render() {
    console.log('feed', this.state.events);
    return (
          <div>
            <div id="container">
              <h1 className="feed">Event Feed</h1>
            </div>

          </div>
       )
  }


 }

export default Feed
