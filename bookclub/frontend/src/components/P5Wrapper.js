import React, { Component } from "react";

import bubbles from "../sketchs/bubbles";

export default class P5Wrapper extends Component {
  componentDidMount() {
    this.canvas1 = new window.p5(bubbles, "canvas1-container");
  }

  componentWillUnmount() {
    this.canvas1.remove();
  }

  render() {
    return <div className="p5Wrapper" id="canvas1-container" />;
  }
}
