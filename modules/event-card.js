import React from 'react'

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
    return (

<div className="col-sm-6 col-md-4 col-lg-3 mt-4 text-center">
    <div className="card">
        <img className="card-img-top" src={this.props.event.event_cover_picture}></img><br></br>
        <div className="card-block">
        <p>click the calendar to add event</p>
            <figure className="profile">
            <i onClick={this.clickHandler.bind(this)} data={this.props.event.event_id} className="fa fa-calendar fa-lg" aria-hidden="true"></i><br></br>
            </figure>
            <h1 className="card-title mt-3">{this.props.event.event_name}</h1>
            <p>{this.props.event.category}</p>
            <div className="card-text">
              <p>{this.props.event.description}</p>
            </div>
        </div>
        <div className="card-footer">
            <small>{this.props.event.start_time} | {this.props.event.end_time}</small><br></br>
            <small>*Go to calendar to see events*</small>
        </div>
    </div>
</div>
       )
  }
}

export default EventCard
