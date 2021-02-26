import { GET_USERS, GET_PROFILE } from "../constants/actionsType";

const initialState = {
  users: [], //all users
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }; //payload: array of bootcamps
    // case ADD_USERS:
    //   return {
    //     ...state,
    //     users: [...state.users, action.payload],
    //   };
    default:
      return state;
  }
};


export default usersReducer;
