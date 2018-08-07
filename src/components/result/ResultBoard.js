import React, { Component } from "react";
import ResultItem from "./ResultItem";
import {
  Grid,
  Well,
  Row,
  Col,
  Label,
  DropdownButton,
  MenuItem
} from "react-bootstrap";
import "./index.css";
import { Strings } from "../../utils/Constants";
import {
  getStudentsResult,
  getFiscalData,
  getExpenseData
} from "../../actions/studentResultActions";
import { connect } from "react-redux";
import moment from 'moment'

// container component which is calling result api and processing the data for sort(by name) and topper(by marks).
class ResultBoard extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   result: [],
    //   topper: {
    //     rollNumber: -1
    //   }
    // };

    this.state = {
      fiscalRecords: [],
      expenseRecords: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //  this.props.onGetStudentsResult();

    this.props.onGetFiscalData();
    this.props.onGetExpenseData();
  }

  // sorting and max value operation happening here only
  componentWillReceiveProps(nextProps) {
    console.log("next_props", nextProps);

    // let { loading, result, error } = nextProps;
    // if (result.length > 0) {
    //   // sorting by name
    //   result.sort((a, b) => a.name > b.name);

    //   // max value
    //   const topper = result.reduce(
    //     (prev, current) =>
    //       prev.marks.Maths + prev.marks.English + prev.marks.Science >
    //       current.marks.Maths + current.marks.English + current.marks.Science
    //         ? prev
    //         : current
    //   );

    //   console.log("topper", topper);

    //   this.setState({
    //     result: result,
    //     topper: topper
    //   });
    // }

    let { fiscalRecords, expenseRecords } = nextProps;

    if (fiscalRecords.length > 0) {
      this.setState({
        fiscalRecords
      });
    }

    if (expenseRecords.length > 0) {
      this.setState({
        expenseRecords
      });
    }
  }

  onChange(e) {
    console.log("change", e.target.value, e.target.value);

    console.log("fiscal", this.state.fiscalRecords[e.target.value]);

    let fiscal_record = this.state.fiscalRecords[e.target.value];

    let fiscal_start_date_time = fiscal_record.fiscal_start_date_time;
    let fiscal_end_date_time = fiscal_record.fiscal_end_date_time;

    var x = new Date(fiscal_start_date_time);
    var y = new Date(fiscal_end_date_time);

    // fiscal_start_date_time <= posting_date <= fiscal_end_date_time

    console.log("fiscal_dates", x, y);

    let expense_reocords = this.state.expenseRecords;

    let fiscal_expense_record = expense_reocords.filter(record => {
      let posting_date = new Date(record.posting_date);
     

      let isAfter = moment(record.posting_date).isAfter(moment(fiscal_start_date_time));
      let isBefore = moment(record.posting_date).isBefore(moment(fiscal_end_date_time));

      console.log("posting_date", isAfter, isBefore);


      return (isBefore && isBefore)

      // return (
      //   x.valueOf() <= posting_date.valueOf() &&
      //   posting_date.valueOf() <= y.valueOf()
      // );
    });

    console.log("fiscal_list", fiscal_expense_record);
  }

  render() {
    return (
      <Grid>
        <h1 className="header">Fiscal and expense</h1>

        <div>Total Fiscal Records: {this.state.fiscalRecords.length} </div>
        <div>Total Expense Records: {this.state.expenseRecords.length} </div>

        <select
          name="Select Fiscal"
          value="Select Fiscal"
          onChange={this.onChange}
        >
          {this.state.fiscalRecords.map((e, key) => {
            return (
              <option key={key} value={key}>
                {e.name}
              </option>
            );
          })}
        </select>

        <DropdownButton bsStyle="default" title="Select Fiscal" key={0}>
          {this.state.fiscalRecords.map(record => {
            return (
              <MenuItem
                label={record.name}
                value={record}
                onSelect={(e, record) => {
                  console.log("val", e, record);
                }}
              >
                {record.name}
              </MenuItem>
            );
          })}

          {/* <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>
            Active Item
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem> */}
        </DropdownButton>

        {/* <Well>
          <Grid>
            <Row className="show-grid">
              <Col xs={3} md={3}>
                <div className="board-header">Student Name</div>
              </Col>
              <Col xs={3} md={3}>
                <div className="board-header">Roll Number</div>
              </Col>
              <Col xs={3} md={3}>
                <div className="board-header">Total Marks</div>
              </Col>
              <Col xs={3} md={3}>
                <div className="board-header">Status</div>
              </Col>
            </Row>
          </Grid>
        </Well>

        {this.state.result.map((student, index) => (
          <ResultItem
            key={student.rollNumber}
            student={student}
            topper={this.state.topper}
          />
        ))} */}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.studentResult.result,
    loading: state.studentResult.loading,
    error: state.studentResult.error,

    fiscalRecords: state.fiscal.records,
    fiscalLoading: state.fiscal.loading,
    fiscalError: state.fiscal.error,

    expenseRecords: state.expense.records,
    expenseLoading: state.expense.loading,
    expenseError: state.expense.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetStudentsResult: () => dispatch(getStudentsResult()),
    onGetFiscalData: () => dispatch(getFiscalData()),
    onGetExpenseData: () => dispatch(getExpenseData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultBoard);
