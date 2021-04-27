import {inputReducer, fetchReducer, newPinReducer, landingReducer} from './Reducers'
import { combineReducers } from 'redux';

export default combineReducers({
    pins: inputReducer, fetchReducer, newPinReducer, landingReducer
});


