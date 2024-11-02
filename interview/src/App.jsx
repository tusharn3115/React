import React from 'react'

const App = () => {

  const student = []

  return (
    <div>
      <h1>Interview</h1>

      {/* task 1 */}
      {/* <p>{student.length && "No student Found"}</p>  */}
      {/* no here student is an empty array and also the value of an empty array is 0 and by default o is false so we will get 0 as an output  */}
      
      {/* and with  && operator if the left side is false then the right side will never be executed be executed */}
      {/* correct method */}

      <p>{student.length === 0 &&  "No student Found"}</p>



      <p>Number of student: {student.length}</p>
    </div>
  )
}

export default App