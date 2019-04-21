import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import SocialIcons from "./common/SocialIcons";

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
          <div className="full-width title-card">
            <div className="name effect3">
              <h1>
                <Link to={ROUTES.HOME}>Case Ploeg</Link>
              </h1>
            </div>
          </div>

          <div className="home-content">
            <p>
              Hi! I'm <Link to={ROUTES.HOME}>Case Ploeg</Link>, on occasion I:
              read books and write about them, make websites, and study Computer
              Science at the University of Toronto.
            </p>
            <p>
              Join my <Link to={ROUTES.BLOG}>bookclub</Link>!
            </p>
            <p>case.ploeg[at]gmail.com</p>
          </div>
        </div>
        <div className="full-width socials">
          <SocialIcons />
        </div>
      </div>
    );
  }
}

export default Home;
