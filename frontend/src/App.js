import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/home';
import connect from 'react-redux';
import {getDishes} from './actions';
import About from './components/about';
import Index from './components/index';
import Error from './components/error';
import Form from './components/form';

class App extends Component {

  componentDidMount(){
    this.props.getDishes()
  }

  render(){
    if (this.props.loading){
      return(
        <h3>LOADING...</h3>
      )
    }
  }

  return(
      <Router>
        <Route exact path="/" component={Home}/>
        </Router>
    )
  }

  }


export default App;
