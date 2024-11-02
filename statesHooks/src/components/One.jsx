import React from 'react'

const One = ({ count, clickHandler }) => {

    const click  = () => clickHandler()

  return (
    <div>
        <p>{count}</p>
        <button onClick={click}>Increment</button>
    </div>
  )
}

export default One