import axios from "axios";

// const BASE_URL = "https://todo-assignment-backend-production.up.railway.app";
const BASE_URL = "https://todo-assignment-backend-13lebzpmf-danesh-tolani.vercel.app";

// * we wil have to send firstname, lastname, email, password
const registerUser = async (userData) => {
  const response = axios.post(`${BASE_URL}/api/user/register`, userData);
  return response;
};

// * id and password will come
const loginUser = async (userData) => {
  const response = axios.post(`${BASE_URL}/api/user/login`, userData);
  return response;
};

export { registerUser, loginUser };
