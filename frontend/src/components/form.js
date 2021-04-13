import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component{
  state = {
    name: " ",
    meal_attributes: " ",
    notes: " "
  }

  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addDish(this.state, this.props.history)
  }

  render()
}