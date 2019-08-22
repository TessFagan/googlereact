import React from 'react';
import logo from './logo.svg';
import './App.css';
import page1 from "./components/page1";
import page2 from "./components/page2";
import noMatch from "./components/noMatch";

function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={page1} />
          <Route exact path="/savedBooks" component={page2} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
