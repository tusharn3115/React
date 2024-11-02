import React, { useContext } from 'react'
import UserProfile from './components/UserProfile'
import { UserProvider } from './components/UserContext'
import UpdateUser from './components/UpdateUser'
// import ComponentA from './components/ComponentA'
// import { createContext } from 'react'


// exported bcoz to use the context anywhere in the project
// export const data = createContext()
// export const data1 = createContext()

const App = () => {

  // const name = "Tushar Negi"
  // const age = "21"

  return (
    <UserProvider>
      {/* <data.Provider value={name}>
        <data1.Provider value={age}>
          <ComponentA />
        </data1.Provider>
      </data.Provider> */}

      <UserProfile/>
      <UpdateUser/>
    </UserProvider>
  )
}

export default App


// Prop Drilling --------------------------------------------------

// Prop drilling occurs when a prop needs to be passed through several layers of nested components to reach a deeply nested child component that actually needs the prop.

// Prop drilling can lead to increased complexity, especially in large component trees. As components get nested deeper, managing the flow of props becomes more challenging and can clutter the codebase.

// here comes the concept of Context API



// Context API --------------------------------------------------

// Context api is a feature that allow you to manage and share states across components tree without having to pass the prop to every component until reached the desired component or the component using prop without having to manually pass the prop to every component

// it is very usefull where you need to share data across many components, especially when these component are deeply nested

// context api consist of 2 context 
// 1) Provider
// 2) Consumer

// 1) Provider

// The Provider component is used to pass data (like state or functions) down the React component tree without having to pass props manually at every level.

// It accepts a value and inside that value we passes the prop which is the data that will be shared with all components that are consumers of that context.


// 2) Consumer

// It allows components to subscribe to the context and access the values provided by a Provider.

// In the Context API, "subscribing" means that the Consumer component is connected to the context. It will automatically receive updates whenever the data provided by the Provider changes. 

// This way, the Consumer doesn't need to manually track the state; it just waits for updates and reacts to changes.





// useContext ------------------------------------------------------

// useContext hook allows us to access the context values provided by the context object directly within the functional component.

// context provide a way to directly pass data through the component tree without having to pass props down manually at every level 