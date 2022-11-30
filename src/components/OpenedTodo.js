import React from "react";
import { deleteTodo, editTitle } from "../utils/handleApi";
import arrow from "./arrow.png";
import { createTask, editTask } from "../utils/handleTaskApi";
import "./OpenedTodo.css";

const OpenedTodo = ({ todo, getAllTodos, setAddTodo, setHome }) => {
  const deleteSelected = async () => {
    let result = window.confirm("Are you sure you want to delete?");

    if (result) {
      await deleteTodo(todo._id);
      setTimeout(() => {
        getAllTodos();
        setAddTodo(true);
      }, 400);
    }
  };

  const addTask = async () => {
    let promptTask = prompt("Please enter a task");
    if (promptTask === "") {
      alert("Please enter some value");
    } else {
      const response = await createTask(todo?._id, promptTask);
      setHome({ ...todo, tasks: response.data.reqTodo.tasks });
      setTimeout(() => {
        getAllTodos();
      }, 600);
    }
  };

  const editTodoTask = async (event) => {
    let promptTask = prompt("Please Edit the task");
    if (promptTask === "") {
      alert("Please enter some value");
    } else {
      if (promptTask.length > 0) {
        todo.tasks[event.target.id] = promptTask;
        await editTask(todo._id, todo.tasks);
        setTimeout(() => {
          getAllTodos();
        }, 400);
      }
    }
  };

  const editTodoTitle = async () => {
    let promptTask = prompt("Please Edit the Todo Name");
    if (promptTask === "") {
      alert("Please enter some value");
    } else {
      if (promptTask.length > 0) {
        todo.title = promptTask;
        const response = await editTitle(todo._id, todo.title);
        setTimeout(() => {
          getAllTodos();
        }, 400);
      }
    }
  };

  return (
    <div className="  w-[70%]  flex items-center justify-start pl-16 ">
      {Object.keys(todo).length === 0 ? (
        <div className=" h-screen flex items-center justify-start ">
          <h1 className="glass font-bold text-6xl text-left mr-96 py-20 pl-6 pr-20 rounded-2xl w-[650px] ">Hello, welcome to your favourite Todo app.</h1>
        </div>
      ) : (
        <div className="pl-6 glass rounded-2xl w-[80%] text-left py-20  ">
          <div className="  mb-8">
            <h1 className="font-bold text-6xl  pb-10 w-fit cursor-pointer" onClick={editTodoTitle}>
              {todo?.title}
            </h1>
            <h2 className="font-semibold text-4xl ">Tasks</h2>
            <div className="flex flex-col gap-2 pt-4 pr-6">
              {todo.tasks &&
                todo.tasks.map((task, index) => {
                  return (
                    <div className="flex items-center  w-fit border border-gray-400 rounded-xl px-2 cursor-pointer pr-4" key={index} id={index} onClick={editTodoTask}>
                      <img src={arrow} alt="" className="rotate-180 w-3" />
                      <p className=" text-xl pl-2  " id={index}>
                        {task}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="w-[100%] flex justify-around pr-6 relative top-10">
            <button className="btn" onClick={addTask}>
              Add task
            </button>
            <button className="btn" onClick={deleteSelected}>
              Delete Todo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenedTodo;
