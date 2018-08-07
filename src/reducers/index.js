import { studentResult, fiscalData, expenseData } from "./studentResultReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  studentResult: studentResult,
  fiscal: fiscalData,
  expense: expenseData
});

export default rootReducer;
