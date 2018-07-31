import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ResultBoard } from "./components/result";
import { AdmissionForm } from "./components/admission";
import { Grid } from "react-bootstrap";
import Navigation from "./screens/Navigation";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path="/" component={ResultBoard} />
        <Route path="/admissionForm" component={AdmissionForm} />
      </div>
    );
  }
}

export default App;
