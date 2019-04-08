import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // fetch("http://localhost:8000/users.json", {
    //   mode: "cors",
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json"
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(JSON.stringify(myJson.results));
    //   });
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home">
          <h1>
            <Link to={ROUTES.HOME}>Case Ploeg</Link>
          </h1>
          <br />
          <Link to={ROUTES.BLOG}>Book Club</Link>
        </div>
      </div>
    );
  }
}

export default Home;
