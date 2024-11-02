import React from 'react'

const Two = ({ count, clickHandler }) => {

    const click = () => clickHandler()

  return (
    <div>
        <button onClick={click}>Decrement</button>
    </div>
  )
}

export default Two