import React from 'react'
import WelcomeUser from './WelcomeUser'

const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Hey ${user} 👋`)
    }

    const handleHover = () => {
        alert('You are hovering me !!')
    }

    return (
        <>
            <WelcomeUser
                onClick={() => handleWelcomeUser("Tushar")}
                onMouseEnter={handleHover}
            />
        </>
    )
}

export default EventProps