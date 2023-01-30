import axios from "axios";
const BASE_URL = "https://todo-assignment-backend-production.up.railway.app";
// const BASE_URL = "https://todo-assignment-backend-13lebzpmf-danesh-tolani.vercel.app";
// const BASE_URL = "https://todo-assignment-backend-r58d.vercel.app";

const createTask = async (id, task) => {
  const response = axios.post(`${BASE_URL}/addTask/${id}`, { task });
  return response;
};

const editTask = async (id, tasks) => {
  axios
    .put(`${BASE_URL}/updateTask/${id}`, { tasks })
    .then(() => {
      console.log({ message: "Task edited successfully", tasks });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { createTask, editTask };
