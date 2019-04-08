import React, { Component } from "react";

const INITIAL_STATE = {
  id: "",
  title: "",
  text: ""
};

class AddBlogEntryBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    console.log("submit");
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { id, title, text, error } = this.state;

    const isInvalid = text === "" || title === "" || id === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          value={title}
          onChange={this.onChange}
          type="text"
          placeholder="Title"
        />
        <input
          name="id"
          value={id}
          onChange={this.onChange}
          type="text"
          placeholder="Id"
        />
        <textarea
          name="text"
          value={text}
          onChange={this.onChange}
          type="textarea"
          placeholder="Text"
        />
        <button disabled={isInvalid} type="submit">
          Submit
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const AddBlogEntry = AddBlogEntryBase;

export default AddBlogEntry;
