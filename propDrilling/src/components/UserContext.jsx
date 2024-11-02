import React from 'react'
import { createContext,useState } from 'react'
import UserProfile from './UserProfile'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const  [user, setUser] = useState({name: 'Joe Amthos'})

    const updateUser = (newName) => {
       setUser({name: newName}) 
    }


    return <UserContext.Provider value={{user, updateUser}}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider} 