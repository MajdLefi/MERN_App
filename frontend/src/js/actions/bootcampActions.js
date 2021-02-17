import axios from 'axios'
import {GET_BOOTCAMPS,ADD_BOOTCAMPS} from '../constants/actionsType'

export const getBootcamps =() => dispatch => {
    axios.get('/bootcamps/list').then(res=>{
        dispatch({
            type: GET_BOOTCAMPS,
            payload: res.data
        })
    })
    .catch(err=>console.error(err))
}

export const addBootcamps =() => dispatch => {
    axios.post('/bootcamps/list').then(res=>{
        dispatch({
            type: ADD_BOOTCAMPS,
            payload: res.data
        })
    })
    .catch(err=>console.error(err))
}