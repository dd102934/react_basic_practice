import React from "react";
import { render } from "react-dom";

const title = "こんにちは世界";
const body = "Hello";
const string = name => {
  return `こんにちは${name}`;
};

const ReturnReactElement = props => {
  return (
    <div>
      <h3>{Math.random()}</h3>
      <h2>{title}</h2>
      <h3>{string("Hoge")}</h3>
      <p2>{body}</p2>
      <ul>
        <li>夜ご飯は{props.name}</li>
        <li>好きなスポーツは{props.sport}</li>
      </ul>
    </div>
  );
};

render(
  <ReturnReactElement name="Foo" sport="tennis" />,
  document.getElementById("root")
);
