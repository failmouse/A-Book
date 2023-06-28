import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { calendarRequest } from './general';
import { loadCalendar } from '../core/calendarSlice';

const Calendar = (limit) => {
    const dispatch = useDispatch();
    useEffect(() => {
        calendarRequest(limit).then(response => {
            dispatch(loadCalendar(response.data.rows));
        }).catch(err => {
            console.log(err)
        });
    }, [dispatch, limit])
}

export default Calendar;