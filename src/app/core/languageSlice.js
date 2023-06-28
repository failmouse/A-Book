import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import en from '../languages/en.json';

const cookies = new Cookies();

const remembered = cookies.get('language');

const initialState = () => {
    switch (remembered) {
        case undefined:
            cookies.set('language', 'en', { path: '/' });
        // return en;
        case "en":
        // return en;
        default:
            return {};
    }

}

export const languageSlice =
    createSlice({
        name: 'language',
        initialState: {
            data: initialState(),
            selected: remembered,
        },
        reducers: {
            changeLanguage: (state, action) => {
                state.data = action.payload;
            },
            selectLanguage: (state, action) => {
                state.selected = action.payload;
            }
        },
    })

export const { changeLanguage, selectLanguage } = languageSlice.actions

export default languageSlice.reducer
