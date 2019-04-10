import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
export class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { hide: "hide" };

    //bind
    this.onClick = this.onClick.bind(this);
  }

  // event handler for comment button, toggles style
  onClick() {
    if (this.state.hide == "") {
      this.setState(prevState => (prevState["hide"] = "hide"));
    } else {
      this.setState(prevState => (prevState["hide"] = ""));
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Show comments</button>
        <div className={this.state.hide}>
          <CommentList id={this.props.id} />
          <CommentForm id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Comments;
