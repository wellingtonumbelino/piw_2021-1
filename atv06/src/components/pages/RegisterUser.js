import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import '../../styles/RegisterUser.css';
import { registerUser } from '../../api/auth';

function FormRegister() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmitRegister = (user) => {
    registerUser(user).then((response) => {
      console.log(response);
      history.push("/login");
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="content">
      <img src="./facebook-logo.png" alt="logo-facebook" width="400px" />
      <form className="form-register-user" onSubmit={handleSubmit(onSubmitRegister)}>
        <input type="text" {...register("name")} placeholder="Name" />
        <input type="email" {...register("email")} placeholder="Email" />
        <input type="password" {...register("password")} placeholder="Password" />
        <input type="submit" className="input-submit" value="Register" />
      </form>
    </div>
  )
}

export function RegisterUser() {
  return (
    <div>
      <FormRegister />
    </div>
  )
}