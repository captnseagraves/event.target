import React from 'react'
import Events from './events'
import { CookiesProvider, withCookies, Cookies } from 'react-cookie'

class FeedList extends React.Component {
constructor(props) {
  super(props)

// console.log(this.props.events);
  this.state = {
    events : this.props.events,
    categories : []
  }
}



componentDidMount() {
  console.log("events feedlist.js", this.state.events);
let userId = document.cookie.match( /(; )?userId=([^;]*);?/ )[2]
  fetch(`/api/user_category/${userId}`)
  .then(res => res.json())
  .then(categories => {
    console.log(categories);
    this.setState({
      categories
    })
  })
}


  render() {
    let filterArr = []
    console.log(this.props.events);
    for (var i = 0; i < this.props.events.length; i++) {
      let event = this.props.events[i]
      console.log(event.category);
      if (this.state.categories.includes(event.category)) {
        filterArr.push(event)
      }
    }

    console.log(filterArr);
    this.setState({
      events:filterArr
    })
    return (
      <div></div>
    )
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
