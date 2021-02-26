import {
  GET_BOOTCAMPS,
  ADD_BOOTCAMPS,
  REMOVE_BOOTCAMPS,
  EDIT_BOOTCAMPS
} from "../constants/actionsType";

const initialState = {
  bootcamps: [],
  isLoading: false,
};

const bootcampsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOTCAMPS:
      return {
        ...state,
        bootcamps: action.payload,
        isLoading: false,
      }; //payload: array of bootcamps
    case ADD_BOOTCAMPS:
      return {
        ...state,
        bootcamps: [...state.bootcamps, action.payload],
      };
    case REMOVE_BOOTCAMPS:
      return {
        ...state,
        bootcamps: state.bootcamps.filter((b) => b._id !== action.payload._id),
      };
    case EDIT_BOOTCAMPS:
      return {
        ...state,
        bootcamps: state.bootcamps.map((bootcamp) =>
          bootcamp.id === action.payload._id ? action.payload : bootcamp
        ),
      };

    default:
      return state;
  }
};

export default bootcampsReducer;
