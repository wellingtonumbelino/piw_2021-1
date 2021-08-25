import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import '../../styles/PostPage.css';
import '../../styles/Pages.css';

import { Header } from "../Header";
import { AuthContext } from "../../App";
import { addPost } from "../../api/postsAPI";

export function PostPage({ user }) {
  const { auth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmitPost = (post) => {
    addPost(auth.token, post.text).then((response) => {
      console.log(response);
      history.push("/");
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="content-post">
      <Header user={auth.name} />
      <hr />
      <form onSubmit={handleSubmit(onSubmitPost)}>
        <textarea {...register("text")} cols="68" rows="5" placeholder="Escreva sua Mensagem" />
        <input type="submit" />
      </form>
    </div>
  )
}