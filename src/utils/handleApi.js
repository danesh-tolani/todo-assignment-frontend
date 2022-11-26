import axios from "axios";

const createTodo = async (title) => {
  axios
    .post("/createTodo", { title })
    .then(() => {
      console.log({ message: "Created Successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteTodo = async (id) => {
  axios
    .delete(`/deleteTodo/${id}`)
    .then(() => {
      console.log({ message: "Deleted Successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const editTitle = async (id, title) => {
  axios
    .put(`/updateTodo/${id}`, { title })
    .then(() => {
      console.log({ message: "Title Updated Successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTodoById = async (id) => {
  const response = await axios.get(`/getTodos/:${id}`);
  console.log("getTodoByiD:", response);
  // return response;
};

export { createTodo, deleteTodo, editTitle, getTodoById };
