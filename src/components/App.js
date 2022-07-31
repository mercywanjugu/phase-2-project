  import React from "react";
// import '../App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
 )

}

export default App;