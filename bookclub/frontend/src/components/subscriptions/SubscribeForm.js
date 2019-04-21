import React, { Component } from "react";

import { subscribeToBlog } from "../../actions/mail";
import { connect } from "react-redux";

const INITIAL_STATE = {
  email: ""
};

export class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.subscribeToBlog({ ...this.state }).then(
      res => {
        this.setState({ ...INITIAL_STATE });
      },
      err => {}
    );
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Sign up for emails about new posts: </label>
        <span className="form_span">
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="name@example.com"
          />
          <button disabled={email === ""} type="submit">
            Go
          </button>
        </span>
      </form>
    );
  }
}

export default connect(
  null,
  { subscribeToBlog }
)(SubscribeForm);
