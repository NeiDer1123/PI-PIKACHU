import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getPokemons());
  };

  return (
    <div className={style.container}>
      <SearchBar />
      <NavLink to="/home" onClick={handlerClick}>
        HOME
      </NavLink>
      <NavLink to="/create">FORM</NavLink>
    </div>
  );
}
