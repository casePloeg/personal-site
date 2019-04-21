import React, { Component } from "react";

export class SocialIcons extends Component {
  render() {
    return (
      <div className="icons">
        <a href="https://twitter.com/caseploeg">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x outer" />
            <i className="fab fa-twitter fa-stack-1x fa-inverse inner" />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/caseploeg/">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x outer" />
            <i className="fab fa-linkedin fa-stack-1x fa-inverse inner" />
          </span>
        </a>
        <a href="https://github.com/casePloeg">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x outer" />
            <i className="fab fa-github fa-stack-1x fa-inverse inner" />
          </span>
        </a>
        <a href="https://goodreads.com/caseploeg">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x outer" />
            <i className="fab fa-goodreads fa-stack-1x fa-inverse inner" />
          </span>
        </a>
      </div>
    );
  }
}

export default SocialIcons;
