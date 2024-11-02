import React, { useRef } from 'react'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'

const App = () => {

  // const inputElement = useRef(null);
  // // console.log(inputElement);

  // const focusInput = () => {
  //   inputElement.current.focus()
  //   inputElement.current.value = 'Tushar'
  // }
  
  
  return (
    <div>
      {/* <input type="text" ref={inputElement}/>
      <button onClick={() => focusInput()}>Focus</button> */}

      {/* <FocusInput /> */}
      <Timer/>
    </div>
  )
}

export default App





// useRef --------------------------------------------------------

// useRef hook provide a way to access and interact with DOM element or to persist values across renders without causing a re-render.