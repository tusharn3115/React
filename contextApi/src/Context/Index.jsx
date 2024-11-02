// The simple meaning of context api is, it is like a warehouse where all the data is to be stored

import { createContext } from "react";

// Step 1 : creating context -------------------------------------
// keep in mind create context returns a component and not a variable
// and the variable which holds the context should have the first letter capital like is BioContext
export const BioContext = createContext()


// Step 2 : creating provider  -------------------------------------
// in this provider component we have to pass our data which make the data accessible to child components
// value should be passed inside {{}} double curly brackets
// provider is like a warehouse which stores all the data
// destructured the component an pass it as prop and then return it in the context component with property provider

export const BioProvider = ({ children }) => {

    // this is our data
    const myName = "Tushar"
    const myAge = 25

    // here we call the context component with provider property and in this we are going to pass the data
    // if data is more than one then we have to pass it in form of object
    return <BioContext.Provider value={{myName, myAge}}> 
    {/* and here in value we have stored the data as a prop */}
    {/* all the component that will be added to the App.jsx BioProvider component will have access to this data */}

    {children}
    </BioContext.Provider>
}