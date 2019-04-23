import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import BlogEntry from "./BlogEntry";
import Header from "../Header";
import SubscribeForm from "../subscriptions/SubscribeForm";
import SocialIcons from "../common/SocialIcons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts, clearPosts } from "../../actions/posts";

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

    return (
      <div>
        <Header />
        <div className="blog-content">
          <div className="blog-posts">{posts}</div>

          <div className="blog-subscribe">
            <SubscribeForm />
          </div>

          <div className="blog-links">
            <Link to={ROUTES.ARCHIVE}>Older posts</Link>
          </div>
        </div>
        <div className="full-width socials">
          <SocialIcons />
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
