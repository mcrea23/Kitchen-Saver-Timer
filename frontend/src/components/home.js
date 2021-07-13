import React, {Component} from 'react'
import Logo from './images/Logo.png'
import Dog from './images/Dog.gif'
import Image from 'material-ui-image'
const background = Logo
const pic = Dog

class Home extends Component {
  render (){
    return (
    <div className="container">
      <Image aspectRatio={(16/9)} src= {background} />
      <div className="pages">Hope you brought your appetite!
      </div>
      <div className="photo">
        <img src= {pic} alt=""/>
      </div>
    </div>
    )
  }
  
}

export default Home;