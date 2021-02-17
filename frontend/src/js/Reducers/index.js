import {combineReducers} from 'redux'
import authReducer from './authReducer'
import bootcampsReducer from './bootcampsReducer';

const combineReducer = combineReducers({
  authReducer,
  bootcampsReducer
 })

 export default combineReducer
