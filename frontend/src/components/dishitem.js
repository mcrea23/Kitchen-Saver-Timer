import React, { Component } from 'react';
import {connect} from 'react-redux';

class DishItem extends Component{
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
          <button className="button-color" onClick={() => this.props.deleteDish(id,this.props.history)}>DONE</button>
      </div>
    )
  }
}
