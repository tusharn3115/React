import React, { useContext } from 'react'
import { BioContext } from './Index'

const Home = () => {

    // to use the data stored at the context we use useContext hook and inside that we have to pass our context in which the data is stored like in my case i have BioContext 

    // if we have more than one data we have to destructure all the data  in the useContext hook like this const {bio, name, age} = useContext(BioContext)

    const {myName, myAge} = useContext(BioContext)

  return (
    <div>Hello Context API, my name is {myName} and i am {myAge} years old</div>
  )
}

export default Home