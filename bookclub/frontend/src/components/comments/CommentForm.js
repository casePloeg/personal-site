import React, { Component } from "react";

import "../../App.css";
import { connect } from "react-redux";
import { addComment } from "../../actions/comments";

const INITIAL_STATE = {
  name: "",
  body: "",
  email: ""
};

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitComment = event => {
    event.preventDefault();
    this.props.addComment({ ...this.state, post: this.props.id }).then(
      res => {
        this.setState({ ...INITIAL_STATE });
      },
      err => {}
    );
  };

  render() {
    const { name, email, body } = this.state;
    const isInvalid = name === "" || body === "";

    return (
      <div>
        <form className={"comment-form"} onSubmit={this.onSubmitComment}>
          <span className="form-span">
            <label>Name</label>
            <input
              name="name"
              value={name}
              onChange={this.onChange}
              type="text"
              placeholder=""
            />
          </span>
          {/* <span className="form-span">
            <label>Email </label>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="name@example.com"
            />
          </span> */}

          <textarea
            name="body"
            value={body}
            onChange={this.onChange}
            type="textarea"
          />

          <button disabled={isInvalid} type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addComment }
)(CommentForm);
