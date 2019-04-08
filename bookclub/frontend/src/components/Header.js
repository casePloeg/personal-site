import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

class Header extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <h1>
          <Link to={ROUTES.BLOG}>Book Club</Link>
        </h1>
        <h5>
          by <Link to={ROUTES.HOME}>Case Ploeg</Link>
        </h5>
      </div>
    );
  }
}

export default Header;
