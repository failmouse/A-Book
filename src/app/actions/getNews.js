import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { newsRequest } from './general';
import { loadNews } from '../core/newsSlice';

const News = (limit, selectedLang) => {
    const dispatch = useDispatch();
    useEffect(() => {
        newsRequest(limit, selectedLang).then(response => {
            dispatch(loadNews(response.data.rows));
        }).catch(err => {
            console.log(err)
        });
    }, [dispatch, limit, selectedLang])
}

export default News;