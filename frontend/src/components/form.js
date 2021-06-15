import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addDish} from '../actions'

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

  render(){
    return(
      <div>
        <h2>Add Dish</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name"> Name </label>
            <input className="inputs" type="text"
            id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <br />
            <br />
            <label> Meal <br />
            <select value={this.state.value} onChange={this.state.meal_attributes} onChange={this.handleChange}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="other">Other</option> 
            </select>
            </label>
            <br />
            <br />
            <label htmlFor="notes"> Notes </label>
            <textarea className="inputs" id="notes" name="notes" value={this.state.notes} onChange={this.handleChange}/>
          </div>

      <input className="button-color" type="submit" value="Add Dish"/>

        </form>
        </div>
    )
  }
}

export default connect (null, {addDish})(Form)