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



// componentDidMount() {
// let userId = document.cookie.match( /(; )?userId=([^;]*);?/ )[2]
//   fetch(`/api/user_category/${userId}`)
//   .then(res => res.json())
//   .then(categories => {
//     this.setState({
//       categories
//     })
//
//     this.setState({
//       events:filterArr
//     })
//
//   })
// }


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
