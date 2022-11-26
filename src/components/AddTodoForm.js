import React, { useState } from "react";
import "./AddTodoForm.css";
import { createTodo } from "../utils/handleApi";

const AddTodoForm = ({ getAllTodos }) => {
  const [todoName, setTodoName] = useState();

  const submitData = async () => {
    const todo = todoName;
    await createTodo(todo);
    setTodoName("");
    setTimeout(() => {
      getAllTodos();
    }, 300);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitData();
  };

  return (
    <div className="flex pl-16 items-center w-[70%] ">
      <div className=" w-[80%] h-[55%] rounded-2xl glass ">
        <h1 className="font-bold text-4xl pt-2">AddTodoForm</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 items-center h-[100%] mt-20">
          <input
            className="rounded-2xl px-4 py-8 border-none input-style w-[80%] text-4xl"
            type="text"
            value={todoName}
            onChange={(event) => {
              setTodoName(event.target.value);
            }}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoForm;
