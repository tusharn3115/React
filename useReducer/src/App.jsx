import React from 'react'
import { useReducer } from 'react'
import Counter from './components/Counter'


// const  initialState = { count: 0 }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//          count: state.count+1,
//         }
      
//     case 'decrement':
//       return {
//         ...state,
//         count: state.count-1,
//       }

//     case 'reset':
//       return {
//         ...state,
//         count: 0,
//       }  
  
//     default:
//       return state;
//   }
// }

const App = () => {

  // const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {/* <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <h1>Count: {state.count}</h1> */}
      <Counter />
    </div>
  )
}

export default App


// useReducer() --------------------------------------------

// useReducer is a hook similar to useState(), but is designed for more complex state objects or state transition that involve multiple sub-value

// it allows you to manage state in a functional, immutable way


// const[ state, dispatch ] = useReducer( reducer, initialState )

// reducer is a function that describes how the state should change based on actions
// it takes the current state and an action as input, and return a new state

// initialState is the starting value for the state when the component first render