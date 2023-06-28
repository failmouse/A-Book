import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data: null,
    },
    reducers: {
        loadNews: (state, action) => {
            state.data = action.payload;
        }
    },
})

export const { loadNews } = newsSlice.actions

export default newsSlice.reducer
