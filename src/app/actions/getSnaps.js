import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { snapsRequest } from './general';
import { loadSnaps } from '../core/snapsSlice';

const Snaps = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        snapsRequest().then(response => {
            dispatch(loadSnaps(response.data));
        }).catch(err => {
            console.log(err)
        });
    }, [dispatch])
}

export default Snaps;