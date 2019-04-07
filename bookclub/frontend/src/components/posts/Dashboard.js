import React, { Component } from "react";

import Posts from "./Posts";
import Form from "./Form";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Test Change Through Git!</h2>
        <Posts />
        <Form />
      </div>
    );
  }
}

export default Dashboard;
