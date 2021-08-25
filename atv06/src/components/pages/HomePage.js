import { Content } from "../Content"
import { Header } from "../Header"
import { useContext } from "react";

import "../../styles/Pages.css";
import { AuthContext } from "../../App";

export function HomePage() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="content">
      <Header user={auth.name} />
      <hr />
      <Content />
    </div>
  )
}