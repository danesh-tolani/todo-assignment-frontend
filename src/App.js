import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App w-screen  ">
      <div className="bg-blur ">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
