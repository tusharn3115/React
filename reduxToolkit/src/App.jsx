import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className="text-white text-center text-5xl">
        Redux Toolkit Todo-App
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
