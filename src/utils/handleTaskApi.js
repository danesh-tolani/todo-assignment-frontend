import axios from "axios";

const createTask = async (id, task) => {
  axios
    .post(`/addTask/${id}`, { task })
    .then(() => {
      console.log({ message: "Task added successfully", task });
    })
    .catch((error) => {
      console.log(error);
    });
};

const editTask = async (id, tasks) => {
  axios
    .put(`/updateTask/${id}`, { tasks })
    .then(() => {
      console.log({ message: "Task edited successfully", tasks });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { createTask, editTask };
