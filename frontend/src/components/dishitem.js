import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteDish} from '../actions/index'
//e6?
class DishItem extends Component{
  // mealName= (num) => {
  //   switch (num) {
  //     case 0:
  //       return "Breakfast" 
  //     case 1:
  //       return "Lunch"
  //     case 2:
  //       return "Dinner"
  //   }
  // }


  render(){
    const {name, meal, notes, id}=this.props
    return(
      <div>
        <div className="container">
          <br />
          <h3>{name}</h3>
          <h4>{meal}</h4>
          <p>{notes}</p>
          <br />
          <button className="button-color" onClick={() => this.props.deleteDish(id,this.props.history)}>DELETE</button>
      </div>
    </div>
    )
  }
}

export default connect (null, {deleteDish})(DishItem)
