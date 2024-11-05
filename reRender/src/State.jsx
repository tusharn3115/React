import React, { useState } from 'react'

const State = () => {

    console.log("Parent Component Render");
    const [increment, setIncrement] = useState(0)
  
    const handleClick = () => {
      setIncrement(increment + 1);
    }

  return (
    <>
    <div style={{ marginBottom: "20px" }}>
      <h1>{increment}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  </>
  )
}

export default State