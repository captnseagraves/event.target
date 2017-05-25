import React from 'react';
import { Link } from 'react-router-dom'

// let events = [{}]

class Calendar extends React.Component  {
   constructor(props){
     super(props)

     this.state = {
        events: []
     }
 }

 componentWillMount() {
   fetch(`/api/user_event`,{
     credentials: 'include'
   })
   .then(res => res.json())
   .then(events => {
      console.log(events[2]);
     this.setState({
       events:events
     })
    console.log('this is maybe the state', this.state.events)

    console.log('test');
   $('#calendar').fullCalendar({
        header: {
            left:   'prev,next',
            center: 'title',
            right:  'month,agendaWeek'
        },
        defaultView: 'month',
        views: {
           listDay: { buttonText: 'list day' },
           listWeek: { buttonText: 'list week' }
        },
        editable: true,
        navLinks: true,
        events: this.state.events,
        editable: true,
        eventClick: function(calEvent, jsEvent, view) {
           //modal perhaps with desciption and location
         alert('Event: ' + calEvent.title);
         alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
         // change the border color just for fun
         $(this).css('border-color', 'red');

}
   })

   console.log("give me a little", this.state.events);
   $('#listCal').fullCalendar({
        header: false,
        defaultView: 'listMonth',
        editable: true,
        navLinks: true,
        events: this.state.events,
        editable: true,
   })

   })
 }



   render(){
     return (
       <div className="container-fluid containerCal">
       <nav className="navbar">
         <Link to="/userprofile" title="User Profile" className="fa fa-arrow-circle-right fa-5x navCatRight" aria-hidden="true"></Link>
         <div className="dropdown">
             <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
             <ul className="dropdown-menu">
               <li><Link to="/">Home</Link></li>
<<<<<<< HEAD
               <li><Link to="/feed">Calendar</Link></li>
=======
               <li><Link to="/feed">Feed</Link></li>
>>>>>>> master
               <li><Link to="/category_list">Cateories</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="#">Log Out</Link></li>
             </ul>
           </div>
         </nav>
        <div id="calendar"></div>
        <hr></hr>
        <div id="listCal"> </div>
       </div>
     )
   }
}

export default Calendar;
