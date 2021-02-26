  import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducer from "../Reducers/index";
//import reducer from "../Reducers/authReducer"

const middleware = [thunk];

const store = createStore (
    combineReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
