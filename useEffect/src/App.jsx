import React, { useState, useEffect } from 'react'
import Api from './Api'
import BasicEffect from './BasicEffect'
import CounterEffect from './CounterEffect'
import FetchDataEffect from './FetchDataEffect'

const App = () => {

  // const [value, setValue] = useState(0)
  // const [something, setSomething] = useState(0)

  // useEffect(() => {
  //   if (value > 0) {
  //     console.log("call useEffect");
  //     document.title = `Increment ${value}`
  //   }
  // }, [value, something]);


  return (
    <div>
      {/* <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me!!</button>
      <button onClick={() => setSomething(value + 1)}>Increment by Something</button> */}
      {/* <Api/> */}
      {/* <BasicEffect/> */}
      {/* <CounterEffect/> */}
      <FetchDataEffect/>
    </div>
  )
}

export default App