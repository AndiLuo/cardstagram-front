import {inputReducer, fetchReducer, newPinReducer} from './Reducers'
import { combineReducers } from 'redux';

export default combineReducers({
    pins: inputReducer, fetchReducer, newPinReducer
});


