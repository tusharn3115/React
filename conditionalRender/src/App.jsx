import React from 'react'
import Weather from './component/Weather'
import UserStatus from './component/UserStatus'

const App = () => {
  return (
    <div>
      {/* <Weather/> */}
      <UserStatus loggedIn={true} isAdmin={true} />
    </div>
  )
}

export default App
