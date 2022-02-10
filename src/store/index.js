import data from "./reducer";
import {combineReducers} from 'redux'
const allReducers = combineReducers({
  data,
});
export default allReducers;
