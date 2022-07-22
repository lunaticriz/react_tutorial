import React from "react";

// function Greet() {
//     return <h1>Hello Rizwan</h1>
// }

//ES6
const Greet = (props) => {
    const {name} = props
    return (
        <div>
            <h1>Hello {name}</h1> 
            {props.children}
        </div>
    )
}

export default Greet;