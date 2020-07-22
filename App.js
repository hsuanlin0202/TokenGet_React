import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/style.css";
import Page1info from "./page_1info.js";
import Page2msg from "./page_2msg.js";
import Page3Timeout from "./page_3timeout.js";
import Page4Done from "./page_4done.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/Page2msg">
              <Page2msg />
            </Route>
            <Route path="/Page3Timeout">
              <Page3Timeout />
            </Route>
            <Route path="/Page4Done">
              <Page4Done />
            </Route>
            <Route exact path="/">
              <Page1info />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App };
