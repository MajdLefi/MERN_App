import { GET_BOOTCAMPS, ADD_BOOTCAMPS } from '../constants/actionsType';

const initialState = {
  bootcamps: [],
  isLoading: true,
};

const bootcampsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOTCAMPS:
      return {
        ...state,
        bootcamps: action.paylaod,
        isLoading: false,
      };
    case ADD_BOOTCAMPS:
      return {
        ...state,
        bootcamps: [...state.bootcamps, action.payload],
      };
    default:
      return state;
  }
};

export default bootcampsReducer

