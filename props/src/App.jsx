import React from 'react'
import NetflixSeries from './components/NetflixSeries'

const App = () => {
  return (
    <section className='container'>
      <h1 style={{marginBottom: "70px", marginLeft: "36%", fontSize: "4rem"}}>List of Netflix Series</h1>
      <NetflixSeries/>
    </section>
  )
}

export default App