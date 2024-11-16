import { combineReducers } from "redux";
import { taskreducer } from "./taskReducer";
export default combineReducers({tasks:taskreducer});