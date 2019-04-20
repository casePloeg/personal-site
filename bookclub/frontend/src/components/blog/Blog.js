import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BlogHome from "./BlogHome";
import EntryPage from "./EntryPage";
import Archive from "./Archive";
import * as ROUTES from "../../constants/routes";
import "../../App.css";
class Blog extends Component {
  render() {
    return (
      <div className="blog-wrapper">
        <div className="blog">
          <Switch>
            <Route exact path={this.props.match.path} component={BlogHome} />

            <Route exact path={ROUTES.ARCHIVE} component={Archive} />
            <Route
              path={ROUTES.BLOG + ":id"}
              render={props => <EntryPage {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Blog;
