import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/home';
import {connect} from 'react-redux';
import {getDishes} from './actions';
import About from './components/about';
import Index from './components/index';
import Error from './components/error';
import Form from './components/form';
import Nav from './components/nav';

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

  return(
      <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/dishes" component={Index}/>
        <Route exact path="/dishes/new" component={Form}/>
        <Route component={Error}/>
        </Switch>
        </Router>
    )
  }
}

const mapStateToProps=state => {
  return{
    loading: state.loading
  }
}


export default connect(mapStateToProps, {getDishes})(App)
