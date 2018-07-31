import React, { Component } from "react";
import { Grid, Row, Col, Label, Well } from "react-bootstrap";
import "./index.css";

// child/ item component for result dashboard
class ResultItem extends Component {
  render() {
    let student = this.props.student;
    let topper = this.props.topper;
    let { Maths, English, Science } = student.marks;
    let marks = Maths + English + Science;

    // setting status value
    let status = "Pass";
    if (student.rollNumber === topper.rollNumber) {
      status = "Topper";
    }
    if (Maths < 20 || English < 20 || Science < 20) {
      status = "Fail";
    }

    return (
      <div className="result-item">
        <Well>
          <Grid>
            <Row>
              <Col xs={3} md={3}>
                <div className={status}>
                  {student.name.slice(0, 1).toUpperCase() +
                    student.name.slice(1, student.name.length)}
                </div>
              </Col>
              <Col xs={3} md={3}>
                <div>{student.rollNumber}</div>
              </Col>
              <Col xs={3} md={3}>
                <div>{marks}</div>
              </Col>
              <Col xs={3} md={3}>
                <div>{status}</div>
              </Col>
            </Row>
          </Grid>
        </Well>
      </div>
    );
  }
}

export default ResultItem;
