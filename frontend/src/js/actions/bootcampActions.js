import axios from 'axios'
import {GET_BOOTCAMPS,ADD_BOOTCAMPS,EDIT_BOOTCAMPS,REMOVE_BOOTCAMPS} from '../constants/actionsType'


//GET ALL BOOTCAMPS
//PATH : /bootcamps/list
//response : ARRAY OF BOOTCAMPS

// export const getBootcamps =() => (dispatch) => {
//     axios.get('/bootcamps/list').then(res=>{
//         dispatch({
//             type: GET_BOOTCAMPS,
//             payload: res.data
//         })
//     })
//     .catch(err=>console.error(err))
// }

export const getBootcamps = () => (dispatch) => {
    axios.get("/bootcamps/list").then((res) => {
      dispatch({
        type: GET_BOOTCAMPS,
        payload: res.data,
      });
    })
    .catch(err=>console.error(err))
  };

export const addBootcamps =() => (dispatch) => {
    axios.post('/bootcamps/list').then(res=>{
        dispatch({
            type: ADD_BOOTCAMPS,
            payload: res.data
        })
    })
    .catch(err=>console.error(err))
}

export const editBootcamps =() => (dispatch) => {
  axios.post('/bootcamps/:id').then(res=>{
      dispatch({
          type: EDIT_BOOTCAMPS,
          payload: res.data
      })
  })
  .catch(err=>console.error(err))
}

export const removeBootcamps =() => (dispatch) => {
  axios.post('/bootcamps/:id').then(res=>{
      dispatch({
          type: REMOVE_BOOTCAMPS,
          payload: res.data
      })
  })
  .catch(err=>console.error(err))
}