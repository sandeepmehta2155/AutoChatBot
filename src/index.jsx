import React from "react";
import { render } from "react-dom";

import Container from "./Container";
import Bot from "./Bot";

const App = () => {
  return (
    <div>
      <Bot>
        <Container />
      </Bot>
    </div>
  );
};

render(<App />, document.getElementById("root"));
