import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice.js';
import snapsReducer from './snapsSlice.js';
import calendarReducer from './calendarSlice.js';
import languageReducer from './languageSlice.js';
import assetsReducer from './assetsSlice.js';

export default configureStore({
    reducer: {
        news: newsReducer,
        snaps: snapsReducer,
        calendar: calendarReducer,
        language: languageReducer,
        assets: assetsReducer
    },
})
