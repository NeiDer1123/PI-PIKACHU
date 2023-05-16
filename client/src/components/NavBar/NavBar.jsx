import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  return (
    <div className={style.container}>
      <SearchBar/>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
    </div>
  );
}
