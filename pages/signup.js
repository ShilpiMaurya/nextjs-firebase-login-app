import React from "react";
const Signup = () => {
  return (
    <>
      <h2>Signup</h2>
      <hr />
      <form>
        <h4>Name</h4>
        <input type="name" />
        <h4>Email</h4>
        <input type="email" />
        <h4>Password</h4>
        <input type="password" />
        <br />
        <br />
        <button>Signup</button>
        <h4>Already a user please login here</h4>
      </form>
    </>
  );
};
export default Signup;
