import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // Third approach to event binding of this keyword  by adding constructor
        //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message : 'Good bye!'
    //     })
    //     console.log(this)
    // }

    // Fourth approach to event binding of this keyword using arrow function
    clickHandler = () => {
        this.setState({
            message: 'Good bye!'
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/** First approach to event binding of this keyword */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */} {/** Second approach to event binding of this keyword using arrow function */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
