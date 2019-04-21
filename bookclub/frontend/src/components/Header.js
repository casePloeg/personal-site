import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

class Header extends Component {
  render() {
    return (
      <div className={`header full-width `}>
        <div className="header-content effect3">
          <h2>
            <Link to={ROUTES.BLOG}>Book Club</Link>
          </h2>
          <h5>
            by <Link to={ROUTES.HOME}>Case Ploeg</Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default Header;
