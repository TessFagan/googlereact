import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import page1 from "./components/page1";
import page2 from "./components/page2";
import noMatch from "./components/noMatch";

class App extends Component {

  state = {
    searchInput: [],
  };

  handleClick = (e) => {
    console.log("submit clicked")

  };

  render() {
    return (


      <Router >
        <div>
          <Switch>
            <Route exact path="/" component={page1} handleClick={this.handleClick} />
            <Route exact path="/savedBooks" component={page2} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </Router >
    );
  }

}

export default App;
