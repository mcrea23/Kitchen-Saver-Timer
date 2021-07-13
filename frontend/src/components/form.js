import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addDish} from '../actions'

class Form extends Component{
  constructor() {
    super();
    this.state = {
      name: " ",
      meal_id: "breakfast",
      notes: " "
    }
  }


  handleChange = e => {
    console.log('hoops', e.target.value, e.target, e.target.name)
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    console.log(this.state)
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
            <select name='meal_id' value={this.state.value} onChange={this.handleChange}>
            <option value="0">Breakfast</option>
            <option value="1">Lunch</option>
            <option value="2">Dinner</option>
            <option value="3">Other</option> 
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