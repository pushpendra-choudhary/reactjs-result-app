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


const initialFiscalState = {
  records: [],
  loading: false,
  error: null
};
function fiscalData(state = initialFiscalState, action) {
  switch (action.type) {
    case ActionTypes.GET_FISCAL_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        records: []
      };
    case ActionTypes.GET_FISCAL_FULFILLED:
      return {
        ...state,
        records: action.records,
        loading: false,
        error: null
      };
    case ActionTypes.GET_FISCAL_REJCTED:
      return {
        ...state,
        records: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

const initialExpenseState = {
  records: [],
  loading: false,
  error: null
};
function expenseData(state = initialExpenseState, action) {
  switch (action.type) {
    case ActionTypes.GET_EXPENSE_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        records: []
      };
    case ActionTypes.GET_EXPENSE_FULFILLED:
      return {
        ...state,
        records: action.records,
        loading: false,
        error: null
      };
    case ActionTypes.GET_EXPENSE_REJECTED:
      return {
        ...state,
        records: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export { studentResult, fiscalData, expenseData };
