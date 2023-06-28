import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        data: null,
    },
    reducers: {
        loadCalendar: (state, action) => {
            state.data = action.payload;
        }
    },
})

export const { loadCalendar } = calendarSlice.actions

export default calendarSlice.reducer
