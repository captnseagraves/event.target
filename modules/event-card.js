import React from 'react'

class EventCard extends React.Component {

  render() {
console.log(this.props.event);
    return (
<div className="col-sm-6 col-md-4 col-lg-3 mt-4">
    <div className="card">
        <img className="card-img-top" src={this.props.event.cover_picture}></img><br></br>
        <div className="card-block">
            <figure className="profile">
                <img className="profile-avatar" alt="" src={this.props.event.cover_picture}></img>
            </figure>
            <h1 className="card-title mt-3">{this.props.event.name}</h1>
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
