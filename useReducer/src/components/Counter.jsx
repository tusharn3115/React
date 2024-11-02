import React, { useReducer, useState } from 'react'
import { counterReducer, initialState } from './CounterReduce'

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({ type: 'increment' })
    const handleDecrement = () => dispatch({ type: 'decrement' })
    const handleReset = () => dispatch({ type: 'reset' })


    const handleAddition = () => {
        dispatch({ type: 'addition', payload: +inputValue })
        setInputValue(0)
    }

    const handleSubtract = () => {
        dispatch({ type: 'subtract', payload: +inputValue })
        setInputValue(0)
    }

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <div style={{marginBottom: '10px', display: 'flex' , gap: '5px' }}>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleReset}>Reset</button>
            </div>


            <div style={{ display: 'flex' , gap: '5px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleSubtract}>Subtract</button>
            </div>
        </div >
    )
}

export default Counter