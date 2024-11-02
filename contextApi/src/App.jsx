import React from 'react'
import { BioProvider } from './Context/Index'
import Home from './Context/Home'

const App = () => {
  return (
    <BioProvider>

      {/* if we want to get that data from the comtext we have to wrap our components into provider to access that data */}
      {/* by passing the Home component we wont see any data bcoz we have to get the data by destructuring it from the BioProvider by passing it as props */}
      <Home />
    </BioProvider>
  )
}

export default App