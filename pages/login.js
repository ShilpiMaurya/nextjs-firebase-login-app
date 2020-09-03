import React from "react";
const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <hr />
      <form>
        <h4>Email</h4>
        <input type="email" />
        <h4>Password</h4>
        <input type="password" />
        <br />
        <br />
        <label>
          <input type="checkbox" />
          Keep me logged in
        </label>
        <br />
        <br />
        <button>Login</button>
        <h4>New account please signup here</h4>
      </form>
    </>
  );
};
export default Login;
