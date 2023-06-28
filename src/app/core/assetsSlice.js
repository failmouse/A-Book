import { createSlice } from '@reduxjs/toolkit';

export const assetsSlice = createSlice({
    name: 'assets',
    initialState: {
        data: null,
    },
    reducers: {
        loadAssets: (state, action) => {
            state.data = action.payload;
        }
    },
})

export const { loadAssets } = assetsSlice.actions

export default assetsSlice.reducer
