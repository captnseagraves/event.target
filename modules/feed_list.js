import React from 'react'
import Events from './events'
import { CookiesProvider, withCookies, Cookies } from 'react-cookie'

class FeedList extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    events:this.props.events,
    categories:[],
    hasFiltered:false
  }
  //
  // console.log('another log', this.state)
  // console.log('props', this.props);
}



componentDidMount() {
let userId = document.cookie.match( /(; )?userId=([^;]*);?/ )[2]
  fetch(`/api/user_category/${userId}`)
  .then(res => res.json())
  .then(categories => {
    this.setState({
      categories
    })
  })
}

renderEvents(){
  if (!this.state.hasFiltered) {
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
    this.setState({hasFiltered:true})
    return (
      <div></div>
    )

  }
}

  render() {
// console.log("feedlist", this.state.events);
    return (
          <div>
          // {this.renderEvents()}
          <Events
            events={this.state.events}
           />
          </div>
       )
  }


 }

// export default FeedList
