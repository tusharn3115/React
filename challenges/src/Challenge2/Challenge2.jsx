import React, { useState } from 'react'

const Challenge2 = () => {

    const [users, setUsers] = useState([
        {
            name: "Tushar",
            age: 21,
        },
        {
            name: "Suraj",
            age: 21,
        },
        {
            name: "Aman",
            age: 21,
        },
    ]);

    return (
        <div style={{fontFamily: "Poppins"}}>
            <h1 style={{fontWeight: "600", textDecoration: "Underline"}}>Users List</h1>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li style={{ listStyle: "none", fontSize: "2rem", fontWeight: "300" }} key={index + 1}>
                                {user.name} - {user.age} year old
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Challenge2