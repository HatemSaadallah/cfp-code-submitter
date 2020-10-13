import React from 'react';
import './styling/styles.css';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function OfficeHours(){
    return(
        <div className="office-hours-container">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                    { title: 'event 1', date: '2020-10-12' },
                    { title: 'event 2', date: '2020-10-15' }
                ]}
                eventContent={renderEventContent}
            /> 
            {/*<iframe className="office-hours-sheet" src="https://sheet2api.com/table/Aut0uCtvTSQJ/next-session/Sheet1"*/
                //width="100%" height="600" frameBorder="0"></iframe>

                //<p><a href="https://zoom.us/j/94592609039">Zoom Session Link</a></p>



                //<h2>Office Hours:</h2>
                //<iframe className="office-hours-sheet" src="https://sheet2api.com/table/o9tywNtETM2Q/cfp-y1-office-hours/Week2"
            /*width="100%" height="600" frameBorder="0"></iframe>*/}
        </div>
    );
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <h3>{eventInfo.event.title}</h3>
    </>
  )
}
