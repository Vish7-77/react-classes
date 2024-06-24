import React from "react";
import CreateUserForm from "../components/CreateUserForm";

const Login = ({ setIsLOggedIn }) => {
  return <CreateUserForm  setIsLOggedIn={setIsLOggedIn}/>;
};

export default Login;
