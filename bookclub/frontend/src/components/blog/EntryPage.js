import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Header from "../Header";
import BlogEntry from "./BlogEntry";
import Comments from "../comments/Comments";
import NotFound from "../NotFound";
import * as ROUTES from "../../constants/routes";
import "../../App.css";

import { connect } from "react-redux";

import { getPost } from "../../actions/posts";

class EntryPage extends Component {
  constructor(props) {
    super(props);

    this.state = { not_found: 0 };
  }

  componentDidMount() {
    this.props
      .getPost(this.props.match.params.id)
      .then(res => {
        this.setState(prevState => (prevState["not_found"] = 1));
      })
      .catch(err => {
        this.setState(prevState => (prevState["not_found"] = 2));
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post && prevProps.match.params.id !== this.props.match.params.id) {
      this.props
        .getPost(this.props.match.params.id)
        .then(res => {
          this.setState(prevState => (prevState["not_found"] = 1));
        })
        .catch(err => {
          this.setState(prevState => (prevState["not_found"] = 2));
        });
    }
  }

  render() {
    if (this.state.not_found == 0) {
      return null;
    } else {
      return this.state.not_found == 2 ? (
        <Route path={ROUTES.BLOG} component={NotFound} />
      ) : (
          <div>
            <Header className={"align-right"} />
            <div className="blog-content">
              <BlogEntry frontpage={false} reset={this.state.reset_page} {...this.props.post} />
              <nav className={"blog-nav"}>
                <Link to={`${ROUTES.BLOG}${this.props.post.id - 1}`}>&lt;- Prev</Link>
                |
                <Link to={`${ROUTES.BLOG}${this.props.post.id + 1}`}>Next -&gt;</Link>
              </nav>
              <Comments {...this.props.post} />
            </div>
          </div>
        );
    }
  }
}

const mapStateToProps = state => ({
  post: state.posts.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(EntryPage);
