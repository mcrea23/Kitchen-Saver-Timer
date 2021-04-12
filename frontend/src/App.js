import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/home';

class App extends Component {
  render(){
    return(
      <Router>
        <Route exact path="/" component={Home}/>
        </Router>
    )
  }

  }


export default App;
