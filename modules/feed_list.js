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

componentDidMount() {
let userId = document.cookie.match( /(; )?userId=([^;]*);?/ )[2]
  fetch(`/api/user_category/${userId}`)
  .then(res => res.json())
  .then(categories => {
    this.setState({
      categories
    })
    console.log('categories in feed list', this.state.categories);
    let filterArr = []
    for (var i = 0; i < this.props.events.length; i++) {
      let event = this.props.events[i]
      if (this.state.categories.includes(event.category)) {
        filterArr.push(event)
      }
    }
    this.setState({
      events:filterArr
    })

  })
}

  render() {
// console.log("feedlist", this.state.events);
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
