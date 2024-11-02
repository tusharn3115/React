import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleIncr = () => {
        setCounter(counter + 1)
    }

    const handleDecr = () => {
        if(counter <= 0){
            setCounter(counter)
        }
        else setCounter(counter - 1)
    }

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncr}>Increment</button>
        <button onClick={handleDecr}>Decrement</button>
    </div>
  )
}

export default Counter