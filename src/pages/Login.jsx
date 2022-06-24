import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import Button from "../components/UI/button/Button";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="text" placeholder="Введите пароль" />
        <Button>LogIn</Button>
      </form>
    </div>
  );
};

export default Login;
