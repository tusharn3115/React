import React from 'react'

const Profile = () => {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard name="Alice" age={25} greeting={<div><strong>Hi Alice, have a wonderfull day!</strong></div>}>
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard name="Bob" age={21} greeting={<div><strong>Hi Bob, have a wonderfull day!</strong></div>}>
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard name="Fartu" age={28} greeting={<div><strong>Hi Fartu, have a wonderfull day!</strong></div>}>
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile


function ProfileCard({name, age, greeting, children}) {
    return (
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}