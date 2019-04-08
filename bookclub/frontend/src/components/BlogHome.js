import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import BlogEntry from "./BlogEntry";
import Header from "./Header";

class BlogHome extends Component {
  constructor(props) {
    super(props);

    this.state = { entries: {} };
  }

  componentDidMount() {
    // last 5 entries are added (most recent is last)
    // this.props.firebase.db
    //   .ref("/blog/")
    //   .orderByChild("created")
    //   .limitToLast(3)
    //   .once("value")
    //   .then(snap =>
    //     this.setState(prevState => (prevState["entries"] = snap.val()))
    //   );
  }

  render() {
    let blogEntries = [];

    for (let key in this.state.entries) {
      if (this.state.entries.hasOwnProperty(key)) {
        blogEntries.push(<BlogEntry id={this.state.entries[key].id} />);
      }
    }
    blogEntries = blogEntries.reverse();

    return (
      <div>
        <Header class={"align-right"} />
        <div className="blog-content">
          {blogEntries}
          <Link to={ROUTES.ARCHIVE}>Older posts</Link>
        </div>
      </div>
    );
  }
}

export default BlogHome;
