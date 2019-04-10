import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Title: ${error.msg.title.join()}`);
      }
      if (error.msg.body) {
        alert.error(`Body: ${error.msg.body.join()}`);
      }
      if (error.msg.email) {
        alert.error(`${error.msg.email.join()}`);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));
