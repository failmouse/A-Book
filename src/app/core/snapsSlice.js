import { createSlice } from '@reduxjs/toolkit';

export const snapsSlice = createSlice({
    name: 'snaps',
    initialState: {
        data: null,
    },
    reducers: {
        loadSnaps: (state, action) => {
            state.data = action.payload;
        }
    },
})

export const { loadSnaps } = snapsSlice.actions

export default snapsSlice.reducer
