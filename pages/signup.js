import React from "react";
import axios from "axios";

const Signup = () => {
  const data = {
    email: "danerys@gmail.com",
    password: "imdragonqueen"
  };
  const signupButtonHandler = async () => {
    try {
      const response = await axios.post("/api/signup", data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2>Signup</h2>
      <hr />
      <form>
        <h4>Email</h4>
        <input type="email" />
        <h4>Password</h4>
        <input type="password" />
        <br />
        <br />
        <button onClick={signupButtonHandler}>Signup</button>
        <h4>Already a user please login here</h4>
      </form>
    </>
  );
};

export default Signup;
