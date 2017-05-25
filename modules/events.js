import React from 'react'
import EventCard from './event-card'

class Events extends React.Component {

  render() {
    let cards = []
    this.props.events.forEach(function(event){
      cards.push(<EventCard event={event} key={event.id} />)
    })
    return (
          <div>
            {cards}
          </div>
       )
  }
}
export default Events
