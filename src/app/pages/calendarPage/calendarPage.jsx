import React from "react";
import Calendar from './components/calendar/calendar.jsx';
import DateRow from './components/dateRow/dateRow.jsx';
import MayInteresting from '../../components/mayInteresting/mayInteresting.jsx';

const CalendarPage = () => {
    return (
        <>
            <Calendar >
                <DateRow />
            </Calendar>
            <MayInteresting title = "Contacts"/>
        </>
    )
}

export default CalendarPage;