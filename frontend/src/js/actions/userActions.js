import axios from "axios";
import { GET_USERS, GET_PROFILE } from "../constants/actionsType";


export const getUsers = () => (dispatch) => {
    axios.get("/users/list").then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch(err=>console.error(err))
  };

//

export const getCurrentUser = () => (dispatch) => {
  axios
    .get("/users/current")
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch((err) => console.log(err));
};
