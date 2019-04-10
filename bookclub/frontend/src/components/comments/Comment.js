import React, { Component } from "react";
import compile from "../../constants/compile";
import moment from "moment";
export class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.name) {
      let compiled = compile(this.props.body, {});
      let content = compiled.tree;
      let toc = compiled.tree;
      let date = new Date(this.props.created_at);
      // formate the date with moment.js
      let created = moment(date).format("LL");

      this.setState(prevState => ({
        name: this.props.name,
        created: created,
        content: content,
        toc: toc
      }));
      // });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <div>{this.state.content}</div>
        <p>{this.state.created}</p>
      </div>
    );
  }
}

export default Comment;
