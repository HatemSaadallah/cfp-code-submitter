import React from 'react';
import './styling/styles.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './data/events';

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
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView="dayGridMonth"
        // editable={true}
        selectable={true}
        // selectMirror={true}
        initialEvents={INITIAL_EVENTS}
        eventContent={renderEventContent}
      />
    </div>
  );
}
