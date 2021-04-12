import React, {Component} from 'react'
import Logo from './images/Logo.png'

const background = Logo

class Home extends Component {
  render (){
    return (
      <div className = 'App'>
        <img src={background}/>
      </div>
    )
  }
  
}

export default Home;