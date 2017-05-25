import React from 'react'
import Moment from 'moment'

class EventCard extends React.Component {


clickHandler(event) {
  console.log('were here', event.target.getAttribute('data'));
  fetch(`/api/user_event`, {
     method: "POST",
     body: JSON.stringify({event_id:event.target.getAttribute('data')}),
     credentials: 'include',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     }
  })
}


  render() {
    console.log(this.props.event);
    return (

<div className="col-sm-6 col-md-4 col-lg-3 mt-4 text-center">
    <div className="card">
        <img className="card-img-top" src={this.props.event.event_cover_picture}></img><br></br>
        <button onClick={this.clickHandler.bind(this)} data={this.props.event.event_id} type="button" name="button">Add to calendar</button>
        <button type="button" name="button">Subscribe to venue</button>
        <div className="card-block">
            <h1 className="card-title mt-3">{this.props.event.event_name}</h1>
            <p>When: {moment(this.props.event.start_time).format("dddd, MMMM Do YYYY")}</p>
            <p>Where: {this.props.event.venue_name}, {this.props.event.city}, {this.props.event.state}</p>
            <p>What: {this.props.event.category}</p>
            <div className="card-text">
              <p>{this.props.event.description}</p>
            </div>
        </div>
        <div className="card-footer">
            <small>Tom G is a Banana</small><br></br>
        </div>
    </div>
</div>
       )
  }
}

export default EventCard
