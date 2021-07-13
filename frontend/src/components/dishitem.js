import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteDish} from '../actions/index'
//e6?
class DishItem extends Component{
  
  render(){
    const {name, meal, notes, id}=this.props

    let mealName;

      switch (meal) {
        case 0:
          mealName = "Breakfast" 
          break;
        case 1:
          mealName =  "Lunch"
          break;
        case 2:
          mealName =  "Dinner"
          break;
        case 3: 
        mealName = "Other"
      }
    
    console.log(this.props)
    return(
      <div>
        <div className="container">
          <br />
          <h3>{name}</h3>
          <h4>{mealName}</h4>
          <p>{notes}</p>
          <br />
          <button className="button-color" onClick={() => this.props.deleteDish(id,this.props.history)}>DELETE</button>
      </div>
    </div>
    )
  }
}

export default connect (null, {deleteDish})(DishItem)
