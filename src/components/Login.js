import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/handleLogin";
import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  //   setTimeout(() => {
  //     return <h1>error</h1>;
  //   }, 5);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(values.email && values.password)) {
      console.log("Please enter all the fields");
    } else {
      try {
        const response = await loginUser(values);
        if (response.data.success === true) {
          setLoggedIn(true);
          navigate("/todo");
        }
        // * if no response in in error means the connection with server is down
      } catch (error) {
        if (!error?.response) {
          console.log("No server response");
        } else if (error.response) {
          setError(true);
          setErrorText(error.response.data.message);
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="flex  items-center  h-screen w-[100%] justify-center ">
      <div className="glass w-[90%] md:w-[40%] h-[60%] md:h-[75%] rounded-2xl ">
        <h1 className="pt-6 font-bold text-4xl">TODO APP</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 items-center pt-10">
          <h2 className="text-xl ">Email</h2>
          <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.email} name="email" onChange={handleInputChange} />
          <h2 className="text-xl ">Password</h2>
          <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.password} name="password" onChange={handleInputChange} />
          <h4>{error && errorText}</h4>
          <button type="submit" className="btn mt-4">
            Login
          </button>
        </form>
        <h3 className="pt-6">
          Don't have an account, please{" "}
          <span
            className="text-blue-700 cursor-pointer underline "
            onClick={() => {
              navigate("/register");
            }}>
            register{" "}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Login;
