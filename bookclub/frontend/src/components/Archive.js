import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPostLinks, clearPosts } from "../actions/posts";

import Header from "./Header";

class Archive extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { entries: {} };
  }

  componentDidMount() {
    // get the 3 most recent posts
    this.props.getPostLinks();
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  render() {
    let listItems = [];
    if (this.props.posts != []) {
      listItems = this.props.posts.map(post => (
        <li key={post.id}>
          <Link to={`${ROUTES.BLOG}${post.id}`}>{post.title}</Link>
        </li>
      ));
    }

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

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPostLinks, clearPosts }
)(Archive);
