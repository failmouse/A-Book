import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { assetsRequest, getTicks } from './general';
import { loadAssets } from '../core/assetsSlice';

const Assets = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        assetsRequest().then(response => {
            dispatch(loadAssets(response.data));
        }).catch(err => {
            console.log(err)
        });
    }, [dispatch])


  //   useEffect(() => {
  //     let all =[]
  //     assetsRequest().then(response => {
  //         // dispatch(loadAssets(response.data));
  //         all = response.data
  //         for (let i = 0; i < Object.values(all.assets).length; i++) {
  //           getTicks(Object.values(all.assets)[i].symbol).then(resp => {
  //             console.log(resp.data);
  //           })
  //         }
  //         dispatch(loadAssets(all))
  //     }).catch(err => {
  //         console.log(err)
  //     });
  // }, [dispatch])
  }

export default Assets;