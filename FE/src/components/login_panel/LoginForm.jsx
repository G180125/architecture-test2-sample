import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomForm from "../custom_form/CustomForm";
import LoginInput from "./children_component/LoginInput";
import { handleLogin } from "./api/LoginApi";
import AuthState from "../../auth/state/AuthState";

export default function LoginPanel() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user && user.role !== "guest") {
      navigate("/");
    }
  }, [user, navigate]);

  const inputs = [
    {
      type: "text",
      name: "username",
      value: username,
      onChange: (e) => setUsername(e.target.value),
      placeholder: "Username",
    },
    {
      type: "password",
      name: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: "Password",
    },
  ];

  const handleSubmit = async () => {
    try {
      const response = await handleLogin(username, password);
      setUser({
        username: response.username,
        role: response.role,
      });
      setError("");

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <CustomForm
      title="Login"
      InputComponent={LoginInput}
      inputs={inputs}
      positiveButton={{
        title: "Login",
        handler: handleSubmit,
      }}
      normalButton={{
        title: "Register",
        handler: handleSubmit,
      }}
      error={error}
    />
  );
}
