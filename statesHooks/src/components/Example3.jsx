import React, { useEffect, useState } from 'react'

const Example3 = () => {

    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name')
        return savedName ? JSON.parse(savedName) : ""
    })

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClick = () => setName("")
    

    return (
        <div>
            <h1>Your Name is {name}</h1>
            <input type="text" value={name} onChange={handleChange} placeholder='Enter your name'/>
            <button onClick={handleClick}>Clear Name</button>
        </div>
    )
}

export default Example3