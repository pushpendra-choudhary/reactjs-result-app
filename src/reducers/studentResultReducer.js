import { ActionTypes } from "../utils/Constants";

const initialResultState = {
  result: [],
  loading: false,
  error: null
};

function studentResult(state = initialResultState, action) {
  switch (action.type) {
    case ActionTypes.GET_STUDENTS_RESULT_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        result: []
      };
    case ActionTypes.GET_STUDENTS_RESULT_FULFILLED:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null
      };
    case ActionTypes.GET_STUDENTS_RESULT_REJECTED:
      return {
        ...state,
        result: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export { studentResult };
