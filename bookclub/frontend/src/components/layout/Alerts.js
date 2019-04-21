import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Title: ${error.msg.title.join()}`);
      }
      if (error.msg.body) {
        alert.error(`Body: ${error.msg.body.join()}`);
      }
      if (error.msg.email) {
        if (error.msg.email[0].startsWith("bookclub")) {
          alert.error("Email already subscribed");
        } else {
          alert.error(`${error.msg.email.join()}`);
        }
      }
      if (error.status && error.status.startsWith("Too Many Requests")){
        alert.error("Timed out due to repeated requests");
      }
    }

    if (message !== prevProps.message){
      console.log(message);
      if (message.commentSent) alert.success(message.commentSent);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
