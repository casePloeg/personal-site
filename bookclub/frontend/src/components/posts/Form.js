import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../actions/posts";
export class Form extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = e => {
    let addPost = this.props.addPost;
    e.preventDefault();
    const { title, body } = this.state;
    const post = { title, body };
    // if addPost goes through, reset the form fields
    this.props.addPost(post).then(
      res => {
        this.setState({ title: "", body: "" });
      },
      err => {}
    );
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              name="body"
              onChange={this.onChange}
              value={body}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(Form);
