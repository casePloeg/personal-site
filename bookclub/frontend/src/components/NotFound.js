import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>Not Found</h2>
        <p>This page doesn't seem to exist</p>
        <h5>
          <Link to={ROUTES.HOME}>Case Ploeg</Link>
        </h5>
      </div>
    );
  }
}

export default NotFound;
