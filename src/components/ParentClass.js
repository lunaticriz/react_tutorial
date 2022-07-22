import React, { Component } from 'react'
import ChildFunction from './ChildFunction'

export class ParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'parent'
      }
    //   this.showMessage = this.showMessage.bind(this)
    }
    
    showMessage = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildFunction greetHandler={this.showMessage} />
      </div>
    )
  }
}

export default ParentClass
