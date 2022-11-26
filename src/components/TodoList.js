import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import AddTodoForm from "./AddTodoForm";
import OpenedTodo from "./OpenedTodo";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [home, setHome] = useState({});
  const [addTodo, setAddTodo] = useState(false);

  const getAllTodos = async () => {
    const response = await axios.get("/getTodos");
    console.log(response);
    setTodos(response.data);

    // if (response.data.users.length > 0) {
    //   setUserData(response.data.users);
    // }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <div className="flex justify-between flex-row ">
        {/* Expanded Todo*/}
        {addTodo ? <AddTodoForm todos={todos} getAllTodos={getAllTodos} /> : <OpenedTodo todo={home} setHome={setHome} getAllTodos={getAllTodos} setAddTodo={setAddTodo} addTodo={addTodo} />}

        {/* Creating right side scroll for displaying all the todos */}
        <div className="h-screen overflow-y-scroll flex flex-col gap-y-4 scroll-bar-custom py-4   w-[30%]">
          {/* Onclick Functionality on clicking Add Todo */}
          <div
            onClick={() => {
              !addTodo ? setAddTodo(true) : setAddTodo(false);
              setHome({});
            }}>
            <h1 className="glass cursor-pointer select-none py-4 px-10 rounded-2xl mx-2 font-bold text-3xl">Add Todo</h1>
          </div>

          {/* Generating Todos on right side scroll */}
          {todos &&
            todos.map((todo, index) => {
              return <Todo key={index} todo={todo} setHome={setHome} setAddTodo={setAddTodo} currentTodo={home} />;
            })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
