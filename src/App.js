import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeWork1 from "./hw1/HomeWork1";
import HomeWork2 from "./hw2/HomeWork2";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeWork1} />
          <Route exact path="/hw2" component={HomeWork2} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
