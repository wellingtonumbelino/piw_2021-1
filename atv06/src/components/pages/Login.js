import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useContext } from "react";

import { login } from "../../api/auth";
import { AuthContext } from "../../App";

import '../../styles/Login.css';

function FormLogin() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const onSubmitLogin = (login_data) => {
    login(login_data).then((response) => {
      auth.setAuth({ token: response.data.token, name: response.data.name });
      history.push("/");
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="content">
      <img src="./facebook-logo.png" alt="logo-facebook" width="400px" />
      <form onSubmit={handleSubmit(onSubmitLogin)} className="form-login">
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="password" placeholder="Password" {...register("password")} />
        <input type="submit" value="Sing-In" className="input-sing-in" />
      </form>
    </div>
  )
}

export function Login() {
  return (
    <div>
      <FormLogin />
      <div className="nav-link">
        <NavLink to={"/register-user"} className="text-nav-link">Create an Account</NavLink >
      </div>
    </div>
  )
}