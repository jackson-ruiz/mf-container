import React from "react";
import ReactDOM from "react-dom";
import Sample from "mf_procedure/Sample";
import "./index.scss";

const App = () => (
  <>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: mf-container</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <hr />
    <Sample />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
