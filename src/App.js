import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./App.css"


import HomePage from "./pages/homepage/homepage.component"

function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route exact path="/" component={HomePage}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
