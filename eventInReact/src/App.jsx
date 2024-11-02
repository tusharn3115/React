const Button = () => {

  // extracting event handler to seprate function
  let eventHandler = () => {
    return alert('You clicked me !!')
  }
  return <button onClick={eventHandler}>Click Me</button>

  // attaching event handler to the button itself
  // return <button onClick={() => alert('You clicked me !!')}>Click Me !</button>;
};

const App = () => {
  return (
    <section>
      <Button/>
    </section>
  )
}

export default App