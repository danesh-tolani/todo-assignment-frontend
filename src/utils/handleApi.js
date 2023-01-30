import axios from "axios";
const BASE_URL = "https://todo-assignment-backend-production.up.railway.app";
// const BASE_URL = "https://todo-assignment-backend-13lebzpmf-danesh-tolani.vercel.app";
// const BASE_URL = "https://todo-assignment-backend-r58d.vercel.app";
// this todo is an object which contains title and tasks (coming from AddTodoForm.js)
const createTodo = async (todo, setTodos, todos) => {
  const response = axios.post(`${BASE_URL}/createTodo`, todo); // this todo goes as request body inside createTodoController.js
  return response;
};

const deleteTodo = async (id) => {
  axios
    .delete(`${BASE_URL}/deleteTodo/${id}`)
    .then(() => {
      console.log({ message: "Deleted Successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const editTitle = async (id, title) => {
  const response = axios.put(`${BASE_URL}/updateTodo/${id}`, { title });
  return response;
};

const getTodoById = async (id) => {
  const response = await axios.get(`${BASE_URL}/getTodos/:${id}`);
  return response;
};

const searchTodo = async (find) => {
  const response = await axios.post(`${BASE_URL}/searchTodos?find=${find}`);
  return response;
};

export { createTodo, deleteTodo, editTitle, getTodoById, searchTodo };
