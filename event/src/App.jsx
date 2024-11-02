import { useState } from 'react'
import './App.css'

function App() {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    alert("Button Clicked !!")
  }

  function handleClick2() {
    alert("Calling function inside a callback function")
  }

  function handleClick3(name) {
    console.log(`Hey ${name}, Welcome`)
  }

  return (
    <>
      {/* passing reference */}
      <button style={{ marginRight: "10px" }} onClick={handleClick}>Click Me</button>


      {/* calling function inside a callback function */}
      <button style={{ marginRight: "10px" }} onClick={() => handleClick2()}>Click Me 2</button>


      {/* function component inside arrow function */}
      <button style={{ marginRight: "10px" }} onClick={() => alert("Hi i am inline event")}>Click Me 3</button>


      {/* passing argument to event handler */}
      <button onClick={() => handleClick3("Tushar")}>Click Me 4</button>
    </>
  )
}

export default App
