import React, { Component } from "react";

import compile from "../../constants/compile";

import "../../App.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getComments, clearComments } from "../../actions/comments";

import Comment from "./Comment";

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getComments(this.props.id);
  }

  render() {
    let comments = this.props.comments.map(c => (
      <Comment key={c.name + c.created_at} {...c} />
    ));
    return <div>{comments}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments
});

export default connect(
  mapStateToProps,
  { getComments, clearComments }
)(CommentList);
