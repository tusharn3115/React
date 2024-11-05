import React, { useState } from 'react'

const App = () => {

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
      <ChildComponent count={increment} />
      <SiblingComponent count={increment} />
    </>
  )
}

function ChildComponent({ count }) {
  console.log("Child Component Render");
  return (
    <div>Child Component - {count}</div>
  )
}

function SiblingComponent({ count }) {
  console.log("Child Component Render");
  return (
    <div>Child Component - {count}</div>
  )
}

export default App