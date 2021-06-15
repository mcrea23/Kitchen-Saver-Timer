import React, {Component} from 'react'
import {connect} from 'react-redux'
import DishItem from './dishitem'
import {deleteDish} from '../actions/index'

class Index extends Component{
  render(){
    const dishes=this.props.dishes.map((dish, i) => 
    <DishItem key={i} name={dish.name} meal={dish.meal_id} notes={dish.notes} id={dish.id} deleteDish={deleteDish} history={this.props.history}/>)
    return(
      <div>
        {dishes}
      </div>
    )
  }
}

const mapStateToProps=state => {
  return {
    dishes: state.dishes
  }
}

export default connect (mapStateToProps)(Index)