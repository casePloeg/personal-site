import React, { Component } from "react";
import compile from "../../constants/compile";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../App.css";

import moment from "moment";
class BlogEntryBase extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.id) {
      let compiled = compile(this.props.body, {});
      let content = compiled.tree;
      let toc = compiled.tree;
      let date = new Date(this.props.created_at);
      // formate the date with moment.js
      let created = moment(date).format("LL");

      this.setState(prevState => ({
        id: this.props.id,
        title: this.props.title,
        created: created,
        content: content,
        toc: toc,
        frontpage: this.props.frontpage
      }));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      let compiled = compile(this.props.body, {});
      let content = compiled.tree;
      let toc = compiled.tree;
      let date = new Date(this.props.created_at);
      // format the date with moment.js
      let created = moment(date).format("LL");

      this.setState(prevState => ({
        id: this.props.id,
        title: this.props.title,
        created: created,
        content: content,
        toc: toc,
        frontpage: this.props.frontpage
      }));
    }
  }

  render() {
    return (
      <div className="bentry">
        <h2 className="bentry-title">
          {this.state.frontpage ? (
            <Link to={`${ROUTES.BLOG}${this.state.id}`}>
              {this.state.title}
            </Link>
          ) : (
              this.state.title
            )}
        </h2>

        <div className="bentry_content">{this.state.content}</div>

        <h4 className="align-right bentry-date">
          {" "}
          {this.state.frontpage ? (
            <Link to={`${ROUTES.BLOG}${this.state.id}`}>
              {this.state.created}
            </Link>
          ) : (
              this.state.created
            )}
        </h4>
        <div />
      </div>
    );
  }
}

const BlogEntry = BlogEntryBase;
export default BlogEntry;
