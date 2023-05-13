import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

export default function Navbar() {
  return (
    <div className={style.container}>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
    </div>
  );
}
