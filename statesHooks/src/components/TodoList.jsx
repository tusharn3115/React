import React, { useState } from 'react';

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim()) {
            setTodos([...todos, input])
            setInput("")
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}>

            <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '10px'}}>Todo List</h1>

            <input 
            type="text" 
            value={input} 
            onChange={handleChange} 
            placeholder='Add a new todo'
            style={{padding: '10px', fontSize: '18px', border: '1px solid #ccc', borderRadius: '5px', width: '100%'}}/>

            <button 
            type='submit'
            style={{padding: '10px', marginTop: '20px' , fontSize: '18px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%'}}>Add Todo
            </button>

        </form>

        <ol style={{listStyle: 'none', padding: '0', margin: '0', width: '100%'}}>
            {todos.map((todo, index) => (
                <li key={index} style={{padding: '10px', fontSize: '18px', borderBottom: '1px solid #ccc'}}>{todo}</li>
            ))}
        </ol>
    </div>
  )
}

export default TodoList