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
   .then(single_events => {
     fetch(`/api/subscription`, {
         credentials: 'include'
     })
     .then(res => res.json())
     .then(venue_subs => {
       this.setState({
           events: [...single_events, ...venue_subs]
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
             $('#modalTitle').html(calEvent.title);
             $('#modalBody').html(calEvent.description);
             $('#picaroo').attr('src',calEvent.event_cover_picture);
             $('#whereWolf').html(`Venue: ${calEvent.venue_name}`);
             $('#addy').html(`Address: ${calEvent.street} \n ${calEvent.city}  ${calEvent.state}  ${calEvent.zip}`);
             $('#fullCalModal').modal();

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


   })
 }



   render(){
     return (
       <div className="container-fluid containerCal">
         <nav className="navbar">
           <div className="dropdown">
             <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
             <ul className="dropdown-menu">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/feed">Feed</Link></li>
               <li><Link to="/category_list">Categories</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/">Log Out</Link></li>
             </ul>
           </div>
         </nav>
        <div id="calendar" className="scrollYouDont"></div>
       <div id="fullCalModal" className="modal fade">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span className="sr-only">close</span></button>
                      <h1 id="modalTitle" className="modal-title"></h1>
                  </div>
                  <img id="picaroo"></img>
                  <div className="container">
                     <br></br>
                     <div id="whereWolf" className="lefty"></div><br></br>
                     <div id="addy" className="lefty"></div>
                  </div>
                  <div id="modalBody" className="modal-body"></div>
                  <div className="modal-footer">
                  </div>
              </div>
    </div>
</div>
        <hr></hr>
        <div id="listCal"> </div>
       </div>
     )
   }

}
export default Calendar;
