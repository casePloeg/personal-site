import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import BlogEntry from "./BlogEntry";
import Header from "./Header";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts, clearPosts } from "../actions/posts";

class BlogHome extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { entries: {} };
  }

  componentDidMount() {
    // get the 3 most recent posts
    this.props.getPosts(3);
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  render() {
    // let blogEntries = [];
    let posts = [];

    posts = this.props.posts.map(post => (
      <BlogEntry key={post.id} frontpage={true} {...post} />
    ));

    // for (let key in this.state.entries) {
    //   if (this.state.entries.hasOwnProperty(key)) {
    //     blogEntries.push(<BlogEntry id={this.state.entries[key].id} />);
    //   }
    // }
    // blogEntries = blogEntries.reverse();

    return (
      <div>
        <Header class={"align-right"} />
        <div className="blog-content">
          {posts}
          <Link to={ROUTES.ARCHIVE}>Older posts</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts, clearPosts }
)(BlogHome);
