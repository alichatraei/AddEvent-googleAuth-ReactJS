import { combineReducers } from "redux";
import _EventReducer from './_EventReducer'
const rootReducer = combineReducers({ event: _EventReducer })
export default rootReducer