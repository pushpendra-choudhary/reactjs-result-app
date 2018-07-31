import { studentResult } from "./studentResultReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  studentResult: studentResult
});

export default rootReducer;
