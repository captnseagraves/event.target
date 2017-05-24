import React from 'react'

class EventCard extends React.Component {

  render() {

    console.log('IN EVENTCARD')
    return (

          <div>
            <h1>{this.props.event.name}</h1>
            <hr></hr>
          </div>

       )
  }

 }

export default EventCard
