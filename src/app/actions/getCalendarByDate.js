import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { calendarRequestByDate } from './general';
import { loadCalendar } from '../core/calendarSlice';

const CalendarByDate = (filter) => {
    const dispatch = useDispatch();
    useEffect(() => {
        calendarRequestByDate(filter).then(response => {
            dispatch(loadCalendar(response.data.rows));
        }).catch(err => {
            console.log(err)
        });
    }, [dispatch, filter])
}

export default CalendarByDate;