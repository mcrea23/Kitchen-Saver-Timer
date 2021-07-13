import { Icon } from '@material-ui/core';
import React, { Component } from 'react';
import Hungry from './images/Hungry.gif';
import Image from 'material-ui-image'


const photo = Hungry

class About extends Component {
  render() {
    return(
      <div className="pages"> 
        <h2>Welcome</h2>
        <p>
          This is where I keep track of my favorite recipes. This helps save time.. because when i'm hungry I don't want to have to search through a bunch of new recipes. Let's redo something I enjoyed already!
        </p>
        <div>
        <img src= {photo} alt=""/>
        </div>
      </div>
      
    )
  }
}

export default About;