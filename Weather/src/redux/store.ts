import {weatherReducer} from "./widget";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weatherReducer: weatherReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk))