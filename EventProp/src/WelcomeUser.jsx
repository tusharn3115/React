import React from 'react'

const WelcomeUser = (props) => {
    return (
        <>
        <button onClick={props.onClick} style={{marginRight: "10px"}}>Click Me</button>
        <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
        </>
    )
}

export default WelcomeUser