import React from 'react';
import './styling/styles.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <h3>{eventInfo.event.title}</h3>
    </>
  );
}

export default function OfficeHours() {
  return (
    <div className="office-hours-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'event 1', date: '2020-10-12' },
          { title: 'event 2', date: '2020-10-15' },
        ]}
        eventContent={renderEventContent}
      />
    </div>
  );
}
