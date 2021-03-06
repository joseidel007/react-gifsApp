import { useState,useEffect } from 'react';
import { getGif } from '../helpers/GetGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGif( category )
            .then ( imgs => {

                setTimeout( () =>{
                    setState({
                        data: imgs,
                        loading: false
                    })
                },3000 )

                })
                
    }, [ category ])

    return state;

}
