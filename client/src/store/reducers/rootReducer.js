//file for all the reducers
import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from './itinerariesReducer';
import authReducer from './authReducer';
//import registration from './registrationReducer';
//import authentication from './authenticationReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    auth: authReducer, 
    //registration,
    //authentication,
    error: errorReducer
});

export default rootReducer;
