import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  return (
    <div className={style.container}>
      <SearchBar/>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/create">FORM</NavLink>
    </div>
  );
}
