import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Page1 from "./components/page1";
import page2 from "./components/page2";
import noMatch from "./components/noMatch";
import axios from "axios";
import Card from 'react-bootstrap/Card'

class App extends Component {

  state = {
    searchInput: [],
    submitVal: "",
    response: {}
  };

  handleClick = (term) => {
    console.log("submit clicked => " + term);

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}`).then((response) => {
      console.log(response.data);
      this.setState({
        response: response.data
      });
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
