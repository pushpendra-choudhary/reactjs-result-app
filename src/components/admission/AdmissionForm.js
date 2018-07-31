import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Label,
  Button,
  Grid
} from "react-bootstrap";
import "./index.css";
import { Strings } from "../../utils/Constants";

export default class AdmissionFrom extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstName: "",
      lastName: "",
      class: "",
      passingYear: "",
      percentage: ""
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handlePassingYearChange = this.handlePassingYearChange.bind(this);
    this.handlePercentageChange = this.handlePercentageChange.bind(this);
  }

  getFirstNameValidationState() {
    if (this.state.firstName.match(/^[a-zA-Z]+$/)) {
      return "success";
    }
    return "error";
  }

  getLastNameValidationState() {
    if (this.state.lastName.match(/^[a-zA-Z]+$/)) {
      return "success";
    }
    return "error";
  }

  getClassValidationState() {
    if (
      this.state.class.match(/^[a-zA-Z]+$/) ||
      this.state.class.match(/^[0-9]+$/)
    ) {
      return "success";
    }

    return "error";
  }

  getPassingYearValidationState() {
    if (
      this.state.passingYear.match(/^[0-9]+$/) &&
      this.state.passingYear >= 2000 &&
      this.state.passingYear < 2018
    ) {
      return "success";
    }

    return "error";
  }

  getPercentageValidationState() {
    if (this.state.percentage.match(/^[0-9]+$/)) {
      return "success";
    }

    return "error";
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleClassChange(e) {
    this.setState({ class: e.target.value });
  }

  handlePassingYearChange(e) {
    this.setState({ passingYear: e.target.value });
  }

  handlePercentageChange(e) {
    this.setState({ percentage: e.target.value });
  }

  render() {
    return (
      <Grid>
        <form className="form">
          <h1 className="header">{Strings.SCHOOL_ADMISSION_FORM}</h1>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getFirstNameValidationState(
              this.state.firstName
            )}
          >
            <FormControl
              type="text"
              value={this.state.firstName}
              placeholder="First Name"
              maxLength={20}
              onChange={this.handleFirstNameChange}
            />
            <FormControl.Feedback />
            <HelpBlock className="help">
              Only alphabetic characters are allowed and max length is 20
            </HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getLastNameValidationState(
              this.state.lastName
            )}
          >
            <FormControl
              type="text"
              value={this.state.lastName}
              placeholder="Last Name"
              maxLength={20}
              onChange={this.handleLastNameChange}
            />
            <FormControl.Feedback />
            <HelpBlock className="help">
              Only alphabetic characters are allowed and max length is 20
            </HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getClassValidationState(this.state.class)}
          >
            <FormControl
              type="text"
              value={this.state.class}
              placeholder="Class"
              maxLength={3}
              onChange={this.handleClassChange}
            />
            <FormControl.Feedback />
            <HelpBlock className="help">
              Only Alpha Numeric are allowed and max length is 3
            </HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getPassingYearValidationState(
              this.state.passingYear
            )}
          >
            <FormControl
              type="text"
              value={this.state.passingYear}
              placeholder="Passing Year"
              maxLength={4}
              onChange={this.handlePassingYearChange}
            />
            <FormControl.Feedback />
            <HelpBlock className="help">
              Only Numeric and Passing Year should be greater than 2000 and less
              than 2018
            </HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
            validationState={this.getPercentageValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.percentage}
              placeholder="Percentage %"
              maxLength={2}
              onChange={this.handlePercentageChange}
            />
            <FormControl.Feedback />
            <HelpBlock className="help">Only Numeric</HelpBlock>
          </FormGroup>

          {this.getFirstNameValidationState() === "success" &&
          this.getLastNameValidationState() === "success" &&
          this.getClassValidationState() === "success" &&
          this.getPassingYearValidationState() === "success" &&
          this.getPercentageValidationState() === "success" ? (
            <Button className=".submit" bsStyle="primary">
              Submit
            </Button>
          ) : null}
        </form>
      </Grid>
    );
  }
}
