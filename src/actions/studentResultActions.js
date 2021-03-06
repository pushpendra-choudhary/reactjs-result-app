import { ActionTypes } from "../utils/Constants";
import { getData } from "../utils/Api";

const data = [
  {
    name: "rajiv",
    marks: {
      Maths: 18,
      English: 21,
      Science: 45
    },
    rollNumber: "KV2017-5A2"
  },
  {
    name: "abhishek",
    marks: {
      Maths: 43,
      English: 30,
      Science: 37
    },
    rollNumber: "KV2017-5A1"
  },
  {
    name: "zoya",
    marks: {
      Maths: 42,
      English: 31,
      Science: 50
    },
    rollNumber: "KV2017-5A3"
  }
];

// using delay to create effect of api calling
export const getStudentsResult = () => {
  return dispatch => {
    console.log("dispatch");
    dispatch({ type: ActionTypes.GET_STUDENTS_RESULT_PENDING });

    // setTimeout(() => {
    //   dispatch({
    //     type: ActionTypes.GET_STUDENTS_RESULT_FULFILLED,
    //     result: data
    //   });
    // }, 1000);

    // below is a demo of real api calling using axios (here Api creates appropriate request object
    // which is not written in this project for now )

    getData(`bins/180vgz`, {}, "GET")
      .then(response => {
        console.log("response2", response);
        let result = response.result;
        if (result != null) {
          dispatch({
            type: ActionTypes.GET_STUDENTS_RESULT_FULFILLED,
            result: result
          });
        } else {
          dispatch({
            type: ActionTypes.GET_STUDENTS_RESULT_REJECTED,
            error: result.message
          });
        }
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.GET_STUDENTS_RESULT_REJECTED,
          error: error.data.message
        });
      });
  };
};

// using delay to create effect of api calling
export const getFiscalData = () => {
  return dispatch => {
    console.log("dispatch");
    dispatch({ type: ActionTypes.GET_FISCAL_PENDING });

    getData(`bins/180vgz`, {}, "GET")
      .then(response => {
        console.log("response2", response);
        let records = response.records;
        if (records != null) {
          dispatch({
            type: ActionTypes.GET_FISCAL_FULFILLED,
            records: records
          });
        } else {
          dispatch({
            type: ActionTypes.GET_FISCAL_REJCTED,
            error: "error"
          });
        }
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.GET_FISCAL_REJCTED,
          error: error.data.message
        });
      });
  };
};

// using delay to create effect of api calling
export const getExpenseData = () => {
  return dispatch => {
    console.log("dispatch");
    dispatch({ type: ActionTypes.GET_EXPENSE_PENDING });

    getData(`bins/ebk3n`, {}, "GET")
      .then(response => {
        console.log("response3", response);
        let records = response.records;
        if (records != null) {
          dispatch({
            type: ActionTypes.GET_EXPENSE_FULFILLED,
            records: records
          });
        } else {
          dispatch({
            type: ActionTypes.GET_EXPENSE_REJECTED,
            error: "error"
          });
        }
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.GET_EXPENSE_REJECTED,
          error: error.data.message
        });
      });
  };
}