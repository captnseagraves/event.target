import React from 'react';
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
   })
 }


   render(){
     return (
       <div className="container">
        <div id="calendar"></div>
        <hr></hr>
        <div id="listCal"> </div>
       </div>
     )
   }


   componentDidMount() {
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
    $('#listCal').fullCalendar({
         header: false,
         defaultView: 'listMonth',
         editable: true,
         navLinks: true,
         events: this.state.events,
         editable: true,
    })

   }

}


export default Calendar;
