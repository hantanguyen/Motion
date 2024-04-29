import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventStart, setEventStart] = useState('');
    const [eventEnd, setEventEnd] = useState('');

    const handleAddEvent = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setEventTitle(value);
        } else if (name === 'start') {
            setEventStart(value);
        } else if (name === 'end') {
            setEventEnd(value);
        }
    };

    const handleAddEventSubmit = () => {
        const newEvent = {
            id: events.length + 1, // Unique identifier
            title: eventTitle,
            start: new Date(eventStart), // Convert to Date object
            end: new Date(eventEnd) // Convert to Date object
        };
        setEvents([...events, newEvent]);
        setShowModal(false);
    };

    const handleRemoveEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
    };

    return (
        <div>
            <button onClick={handleAddEvent}>Add Event</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Add Event</h2>
                        <form onSubmit={handleAddEventSubmit}>
                            <label>
                                Title:
                                <input type="text" name="title" value={eventTitle} onChange={handleInputChange} />
                            </label>
                            <label>
                                Start:
                                <input type="datetime-local" name="start" value={eventStart} onChange={handleInputChange} />
                            </label>
                            <label>
                                End:
                                <input type="datetime-local" name="end" value={eventEnd} onChange={handleInputChange} />
                            </label>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            )}
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                headerToolbar={{
                  start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                }}
                height={"85vh"}
        
                eventContent={(eventInfo) => (
                    <div>
                        <p>{eventInfo.event.title}</p>
                        <button onClick={() => handleRemoveEvent(eventInfo.event.id)}>Remove</button>
                    </div>
                )}
            />
        </div>
    );
};

export default CalendarComponent;
