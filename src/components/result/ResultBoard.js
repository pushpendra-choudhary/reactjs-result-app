import React, { Component } from "react";
import ResultItem from "./ResultItem";
import { Grid, Well, Row, Col, Label } from "react-bootstrap";
import "./index.css";
import { Strings } from "../../utils/Constants";
import { getStudentsResult } from "../../actions/studentResultActions";
import { connect } from "react-redux";

// container component which is calling result api and processing the data for sort(by name) and topper(by marks).
class ResultBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      topper: {
        rollNumber: -1
      }
    };
  }

  componentDidMount() {
    this.props.onGetStudentsResult();
  }

  // sorting and max value operation happening here only
  componentWillReceiveProps(nextProps) {
    console.log("next_props", nextProps);

    let { loading, result, error } = nextProps;

    if (result.length > 0) {
      // sorting by name
      result.sort((a, b) => a.name > b.name);

      // max value
      const topper = result.reduce(
        (prev, current) =>
          prev.marks.Maths + prev.marks.English + prev.marks.Science >
          current.marks.Maths + current.marks.English + current.marks.Science
            ? prev
            : current
      );

      console.log("topper", topper);

      this.setState({
        result: result,
        topper: topper
      });
    }
  }

  render() {
    return (
      <Grid>
        <h1 className="header">{Strings.STUDENT_RESULT_BOARD}</h1>

        <Well>
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
        ))}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.studentResult.result,
    loading: state.studentResult.loading,
    error: state.studentResult.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetStudentsResult: () => dispatch(getStudentsResult())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultBoard);
