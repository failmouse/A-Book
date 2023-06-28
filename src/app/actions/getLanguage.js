import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { languageRequest } from './general';
import { changeLanguage } from '../core/languageSlice';
// import en from '../languages/en.json';

const Language = (lang) => {
    const dispatch = useDispatch();
    useEffect(() => {
        languageRequest(lang).then(response => {
            // const newLanguage = { ...en, ...response.data.data }
            const newLanguage = response.data.data;
            dispatch(changeLanguage(newLanguage));
        }).catch(err => {
            console.log(err)
        });
    }, [dispatch, lang])
}

export default Language;
