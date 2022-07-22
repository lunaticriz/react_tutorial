import React, { Component } from 'react'

class ClassClick extends Component {
    click_me() {
        console.log('You clicked me from class component')
    }
  render() {
    return (
      <div>
        <button onClick={this.click_me}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick
