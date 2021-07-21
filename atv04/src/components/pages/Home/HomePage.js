
import { Content } from "./Content"
import { Header } from "./Header"
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="content">
      <Header user="Wellington" />
      <hr />
      <Content />
    </div>
  )
}