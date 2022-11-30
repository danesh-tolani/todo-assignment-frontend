import React, { useState, useEffect } from "react";
import { registerUser } from "../utils/handleLogin";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(values.firstname && values.lastname && values.email && values.password)) {
      console.log("Please enter all the fields");
    } else {
      try {
        const response = await registerUser(values);
        if (response.data.success === true) {
          navigate("/");
        }
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

  return (
    <>
      <div className=" h-screen flex justify-center item-center pt-10">
        <div className="glass w-[40%] h-[95%] rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 items-center pt-5">
            <h1 className="pt-6 font-bold text-4xl">TODO APP</h1>
            <h2 className="text-xl">First Name</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.firstname} name="firstname" onChange={handleInputChange} />
            <h2 className="text-xl">Last Name</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.lastname} name="lastname" onChange={handleInputChange} />
            <h2 className="text-xl">email</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.email} name="email" onChange={handleInputChange} />
            <h2 className="text-xl">password</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.password} name="password" onChange={handleInputChange} />
            <h2>{error && errorText}</h2>
            <button type="submit" className="btn mt-4">
              Submit
            </button>
            <h3>
              If you already have an account, please{" "}
              <span
                className="text-blue-700 cursor-pointer underline"
                onClick={() => {
                  navigate("/");
                }}>
                sign in
              </span>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
