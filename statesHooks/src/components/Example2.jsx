import React, { useState } from 'react'

const Example2 = () => {

    const [randomNumber, setRandomNumber] = useState(0);

    let generateNumber = () => {
        const  newRandomNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newRandomNumber)

    }


    return (
        <div>
            <h1>Random Number: {randomNumber}</h1>
            <button onClick={generateNumber}>Generate Random Number</button>
        </div>
    )
}

export default Example2