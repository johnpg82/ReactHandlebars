import React from "react";
import ReactDOM from "react-dom";
import Handlebars from "handlebars";

import "./styles.css";

const hbr = `
<p>Hello, my name is {{name}}. I am from {{hometown}}. I have {{kids.length}} kids:</p><ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>
`;

const template = Handlebars.compile(hbr);

function App() {
  const data = {
    name: "Dana",
    hometown: "Miami, FL",
    kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }]
  };
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: template(data) }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
