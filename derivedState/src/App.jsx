import { useState } from 'react';
import './App.css'

function App() {

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

  const totalUser = users.length;   // derive state ( deriving value from existing state )

  return (
    <>
      <div style={{ fontFamily: "Poppins" }}>
        <h1>Users List</h1>
        <ul>
          {
            users.map((user, index) => {
              return (
                <>
                  <li style={{ listStyle: "none" }} key={index + 1}>
                    {user.name} - {user.age} year old
                  </li>
                </>
              );
            })
          }
          <h3>Total User: {totalUser}</h3>
        </ul>
      </div>
    </>
  )
}

export default App
