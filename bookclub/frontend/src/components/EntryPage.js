import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import BlogEntry from "./BlogEntry";
import Comments from "./Comments";
import NotFound from "./NotFound";
import * as ROUTES from "../constants/routes";
import "../App.css";

class EntryPage extends Component {
  constructor(props) {
    super(props);

    this.state = { not_found: true };
  }

  componentWillMount() {
    // this.props.firebase.db
    //   .ref("/blog/" + this.props.match.params.id)
    //   .once("value")
    //   .then(snap => {
    //     if (!snap.val()) {
    //       console.log("invalid");
    //       this.setState({ not_found: true });
    //     }
    //   });
  }

  render() {
    return this.state.not_found ? (
      <Route path={ROUTES.BLOG} component={NotFound} />
    ) : (
      <div>
        <Header class={"align-right"} />
        <div className="blog-content">
          <BlogEntry {...this.props} />
          <Comments {...this.props} />
        </div>
      </div>
    );
  }
}

export default EntryPage;
