import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Page1 from "./components/page1";
import page2 from "./components/page2";
import noMatch from "./components/noMatch";
import axios from "axios";

class App extends Component {

  state = {
    searchInput: [],
    submitVal: "",
  };

  handleClick = (term) => {
    console.log("submit clicked => " + term);

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}`).then(function (response) {
      console.log(response.data);
    });
  }


  render() {
    return (

      <Router >
        <div>
          <Switch>
            <Route path='/' render={(props) => <Page1 {...props} handleClick={this.handleClick} />} />
            <Route exact path="/savedBooks" component={page2} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </Router >
    );
  }
}


export default App;
