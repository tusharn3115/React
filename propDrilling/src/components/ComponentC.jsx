import React from 'react'
import { useContext } from 'react'
import { data, data1 } from '../App'


// this is not the good way to pass our data as we are using so many callback function
const ComponentC = () => {

  // here we have to tell the hook from which context out data is coming from
  const name = useContext(data)
  const age = useContext(data1)

  return (

    // in useContext there is no need of passing the callback function we can simply use the data by the variable in which we have stored the context

    <>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
    </>
    // <data.Consumer>
    //   {(name) => {
    //     // return <h1>{name}</h1>
    //     return (
    //       <data1.Consumer>
    //         {(age) => {
    //           return <h1>My name is {name} and i am {age} years old</h1>
    //         }}
    //       </data1.Consumer>
    //     )
    //   }}
    // </data.Consumer>
  )
}

export default ComponentC