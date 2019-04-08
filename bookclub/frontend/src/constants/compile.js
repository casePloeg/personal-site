import marksy from "marksy";
import React, { createElement } from "react";

const compile = marksy({
  // Pass in whatever creates elements for your
  // virtual DOM library. h('h1', {})
  createElement,

  // You can override the default elements with
  // custom VDOM trees
  elements: {
    h1({ id, children }) {
      return <h1 className="my-custom-class">{children}</h1>;
    },
    h2({ id, children }) {
      return <h2>{children}</h2>;
    },
    h3({ id, children }) {
      return <h3>{children}</h3>;
    },
    h4({ id, children }) {
      return <h4>{children}</h4>;
    },
    blockquote({ children }) {
      return <div className="epigraph">{children}</div>;
    },
    hr() {
      return <hr />;
    },
    ol({ children }) {
      return <ol>{children}</ol>;
    },
    ul({ children }) {
      return <ul>{children}</ul>;
    },
    p({ children }) {
      //console.log(children);
      let regex = /(<cite>)(.*)(<\/cite>)/;
      let ret = children[0].match(regex);
      console.log(children, ret);
      if (ret) {
        return <cite className="align-right">{ret[2]}</cite>;
      } else {
        return <p>{children}</p>;
      }
    },
    table({ children }) {
      return <table>{children}</table>;
    },
    thead({ children }) {
      return <thead>{children}</thead>;
    },
    tbody({ children }) {
      return <tbody>{children}</tbody>;
    },
    tr({ children }) {
      return <tr>{children}</tr>;
    },
    th({ children }) {
      return <th>{children}</th>;
    },
    td({ children }) {
      return <td>{children}</td>;
    },
    a({ href, title, target, children }) {
      return (
        <a href={href} target={target} title={title}>
          {children}
        </a>
      );
    },
    strong({ children }) {
      return <strong>{children}</strong>;
    },
    em({ children }) {
      return <em>{children}</em>;
    },
    br() {
      return <br />;
    },
    del({ children }) {
      return <del>{children}</del>;
    },
    img({ src, alt }) {
      return <img src={src} alt={alt} />;
    },
    code({ language, code }) {
      return <code language={language}>{code}</code>;
    },
    codespan({ children }) {
      return <codespan>{children}</codespan>;
    }
  }
});

export default compile;
