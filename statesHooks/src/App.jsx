import React, { useState } from 'react'
import One from './components/One'
import Two from './components/Two'
import Example from './components/Example'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

const App = () => {

  // useState -------------------
  // const [counter, setCounter] = useState(0)
  // console.log(counter);


  // const increment = () => setCounter(counter + 1)

  // const decrement = () => {
  //   if(counter <= 0){
  //     setCounter(counter)
  //   }
  //   else{
  //     setCounter(counter - 1)
  //   }
  // }


  // updating array of content using useState() ------------

  // const [content, setContent] = useState(['suraj', 'tushar', 'saksham', 'aman'])
  // const addNewFriend = () => setContent([...content, 'Ram'])
  // const removeFriend = () => setContent([content.filter((cont) => cont != 'Ram' )])
  // const updateOneFriend = () => {
  //   setContent(content.map((f) => (f === "suraj" ? "suraj singh" : f)))
  // }

  // updating object using useState() ----------------------
  // const [movies, setMovies] = useState({
  //   title: "Avenger's",
  //   rating: 8
  // })

  // const handleClick = () => {
  //   // const moviesUpdate = {
  //   //   ...movies,
  //   //   rating: 9
  //   // }
  //   // setMovies(moviesUpdate)

  //   setMovies({...movies, rating: 9})
  // }


  // const [movies, setMovies] = useState([
  //   { id: 1, title: 'Spider Man', rating: 8 },
  //   { id: 2, title: 'Iron Man', rating: 7 },
  // ])

  // const handleClick = () => {
  //   setMovies(movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick" } : m)))
  // }



  // sharing states  between components -----------------------------------------
  const [count, setCount] = useState(0)



  return (
    <section>
      {/* <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}


      {/* {content.map((cont, index) => (
        <li key={index}>{cont}</li>
      ))}

      <button onClick={addNewFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateOneFriend}>Update Friend</button> */}


      {/* <h1>Movie: {movies.title}</h1>
      <h1>Rating: {movies.rating}</h1>
      
      <button onClick={handleClick}>Change Rating</button> */}



      {/* {movies.map(m => (
        <li key={m.id}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button> */}



{/* sharing states  between components ------------------------------------------*/}

{/* <One count={count} clickHandler={() => setCount(count + 1)} />
<Two count={count} clickHandler={() => setCount(count - 1)} /> */}



{/* <Example/> */}
{/* <Example2/> */}
{/* <Example3/> */}
{/* <Counter/> */}
{/* <TodoList/> */}
{/* <Profile/> */}
{/* <ShoppingList/> */}




    </section>
  )
}

export default App