import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import Header from "./Header";

class Archive extends Component {
  constructor(props) {
    super(props);

    this.state = { entries: {} };
  }

  componentDidMount() {
    // get dates and ids of all posts
  }

  render() {
    let listItems = [];
    for (let key in this.state.entries) {
      if (this.state.entries.hasOwnProperty(key)) {
        listItems.push(
          <li>
            <Link to={`${ROUTES.BLOG}${this.state.entries[key].id}`}>
              {this.state.entries[key].title}
            </Link>
          </li>
        );
      }
    }
    listItems = listItems.reverse();

    // Comprehensive list of entries
    return (
      <div>
        <Header class={"align-right"} />
        <h2>The Archives</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Archive;
