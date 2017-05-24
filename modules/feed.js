import React from 'react'



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
        events
      })
    })
  }
  
  render() {
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
