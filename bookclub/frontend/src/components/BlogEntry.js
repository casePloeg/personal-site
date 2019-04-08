import React, { Component } from "react";

import compile from "../constants/compile";

import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "../App.css";
// const marksy = require('marksy').marksy

class BlogEntryBase extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    // if rendered with an id prop
    if (this.props.id) {
      // this.props.firebase.db
      //   .ref("/blog/" + this.props.id)
      //   .once("value")
      //   .then(snap => {
      //     let id = snap.val().id;
      //     let title = snap.val().title;
      //     let created = snap.val().created;
      //     let text = snap.val().text;
      //     let compiled = compile(text, {});
      //     let content = compiled.tree;
      //     let toc = compiled.tree;
      //     this.setState(prevState => ({
      //       id: id,
      //       title: title,
      //       created: created,
      //       content: content,
      //       toc: toc,
      //       frontpage: true
      //     }));
      // });
    } else {
      // if rendered with id from url
      // this.props.firebase.db
      //   .ref("/blog/" + this.props.match.params.id)
      //   .once("value")
      //   .then(snap => {
      //     if (snap.val()) {
      //       let id = snap.val().id;
      //       let title = snap.val().title;
      //       let created = snap.val().created;
      //       let text = snap.val().text;
      //       let compiled = compile(text, {});
      //       let content = compiled.tree;
      //       let toc = compiled.tree;
      //       this.setState(prevState => ({
      //         id: id,
      //         title: title,
      //         created: created,
      //         content: content,
      //         toc: toc,
      //         frontpage: false
      //       }));
      //     }
      //   });
    }
  }

  render() {
    return (
      <div className="bentry">
        <h2 className="bentry_title">
          {this.state.frontpage ? (
            <Link to={`${ROUTES.BLOG}${this.state.id}`}>
              {this.state.title}
            </Link>
          ) : (
            this.state.title
          )}
        </h2>

        <div className="bentry_content">{this.state.content}</div>
        <p className="align-right">
          {" "}
          {this.state.frontpage ? (
            <Link to={`${ROUTES.BLOG}${this.state.id}`}>
              {this.state.created}
            </Link>
          ) : (
            this.state.created
          )}
        </p>
        <div />
      </div>
    );
  }
}

const BlogEntry = BlogEntryBase;
export default BlogEntry;
