import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts, deletePost } from "../../actions/posts";

export class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleClick(id) {
    this.props.deletePost(id);
  }
  render() {
    return (
      <Fragment>
        <h2>Posts</h2>
        <table>
          <tbody>
            {this.props.posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.created_at}</td>
                <td>{post.owner}</td>
                <td>
                  <button onClick={this.handleClick.bind(this, post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost }
)(Posts);
