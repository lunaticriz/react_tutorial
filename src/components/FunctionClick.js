import React from 'react'

function FunctionClick() {
    function clickMe() {
        console.log('You clicked me')
    }
  return (
    <div>
      <button onClick={clickMe}>Click</button>
    </div>
  )
}

export default FunctionClick
