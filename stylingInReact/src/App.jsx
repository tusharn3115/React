import React from 'react'

const App = () => {

  let style = { color: 'black', backgroundColor: 'green', padding: '1.5rem' }

  return (

    // inline styling in react
    <div>
      <h1 style={{ color: 'pink', backgroundColor:'teal', padding: '2rem' }}>Inline Styling</h1>

      {/* Dynamic styling Style object */}
      <h2 style={ style }>Styling in React</h2>
    </div>
  )
}

export default App