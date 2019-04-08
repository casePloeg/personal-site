import React, { Component } from "react";

import compile from "../constants/compile";

import "../App.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  text: "",
  comment_class: "hide"
};

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    //bind
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    // if rendered with id from url
    // this.props.firebase.db
    //   .ref("/comments/" + this.props.match.params.id)
    //   .once("value")
    //   .then(snap => {
    //     let rawComments = snap.val();
    //     let comments = [];
    //     if (rawComments) {
    //       comments = rawComments.map(comment => (
    //         <div>
    //           <div>{compile(comment.text, {}).tree}</div>
    //           <p className="align-right">
    //             Posted by {comment.name}, {comment.created}
    //           </p>
    //         </div>
    //       ));
    //     }
    //     this.setState(prevState => (prevState["comments"] = comments));
    //   });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitComment = event => {
    event.preventDefault();

    const { name, email, text } = this.state;
    let today = new Date().toLocaleDateString("en-IN").split("/");

    // pad month and day
    for (let i = 0; i < 2; i++) {
      if (today[i].length < 2) {
        today[i] = "0" + today[i];
      }
    }
    today = today.reverse().join("/");

    // query for last inserted id
    // this.props.firebase.db
    //   .ref("comments/" + this.props.match.params.id)
    //   .orderByChild("id")
    //   .limitToLast(1)
    //   .once("value")
    //   .then(snap => {
    //     let newId = 0;
    //     if (snap.val() !== null) {
    //       // get the id for the next to be added item
    //       newId = parseInt(Object.keys(snap.val())[0]) + 1;
    //     }

    //     // sign in anonymously
    //     this.props.firebase.auth.signInAnonymously().catch(function(error) {
    //       // Handle Errors here.
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       // ...
    //       console.log(errorCode, errorMessage);
    //     });

    //     this.props.firebase.auth.onAuthStateChanged(authUser => {
    //       if (authUser) {
    //         // add the new comment
    //         this.props.firebase.db
    //           .ref("/comments/" + this.props.match.params.id + "/" + newId)
    //           .set({
    //             id: newId,
    //             name: name,
    //             email: email,
    //             text: text,
    //             created: today
    //           })

    //           .then(
    //             this.setState(
    //               prevState => (
    //                 (prevState["name"] = ""),
    //                 (prevState["email"] = ""),
    //                 (prevState["text"] = ""),
    //                 prevState["comments"].push(
    //                   <div>
    //                     <div>{compile(text, {}).tree}</div>
    //                     <p className="align-right">
    //                       Posted by {name} on {today}
    //                     </p>
    //                   </div>
    //                 )
    //               )
    //             )
    //           );
    //         // sign out after commenting
    //         this.props.firebase.doSignOut();
    //       }
    //     });
    //   });
  };

  // event handler for comment button, toggles style
  onClick() {
    if (this.state.comment_class == "") {
      this.setState(prevState => (prevState["comment_class"] = "hide"));
    } else {
      this.setState(prevState => (prevState["comment_class"] = ""));
    }
  }

  render() {
    const { name, email, text } = this.state;

    const isInvalid = name === "" || text === "";

    return (
      <div>
        <button onClick={this.onClick}>Show comments</button>
        <div className={this.state.comment_class}>
          <h3>Comments</h3>
          <div>{this.state.comments}</div>

          <form className={"comment_form"} onSubmit={this.onSubmitComment}>
            <span className="form_span">
              <label>Name</label>
              <input
                name="name"
                value={name}
                onChange={this.onChange}
                type="text"
                placeholder=""
              />
            </span>
            <span className="form_span">
              <label>Email </label>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder=""
              />
              <label> - only used for direct replies</label>
            </span>

            <textarea
              name="text"
              value={text}
              onChange={this.onChange}
              type="textarea"
            />
            <span className="form_span">
              <button disabled={isInvalid} type="submit">
                Publish
              </button>
              <label>Comments may be edited based on content</label>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
