import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Page1 from "./components/page1";
import Page2 from "./components/page2";


class App extends Component {

  render() {
    return (

      <Router >
        <div>
          <Switch>
            <Route exact path='/' component={Page1} />
            <Route exact path='/savedbooks' component={Page2} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
