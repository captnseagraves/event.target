import React from 'react'
import Events from './events'
class FeedList extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    events:this.props.events,
    categories:[]
  }

}


  render() {
    return (
          <div>
          <Events
            events={this.state.events}
           />
          </div>
       )
  }


 }

export default FeedList
