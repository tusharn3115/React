import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App


// event propogation refers to the process of how events propogate or travels through DOM

// in javascript we have 2 phase of event event propogation one is caputing phase and second is bubbling phase

// 1. Capturing phase 
// in capturing phase event starts from the root of the DOM and goes down to the target element
// toh start of the DOM to the target element jis jis per bhi event lga hoga wo sabhi fire hongay and last mai targeted element wala fire hoga


// 2.  Bubbling phase 
// in bubbling phase the event start from the target element and bubbles up to the root of the DOM