import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import logo from "../../assets/logo.png";
import Filters from "../Filters/Filters";

export default function Navbar() {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(getPokemons());
  };

  return (
    <div className={style.navbarContainer}>
      <div className={style.container}>
        <NavLink to="/home" onClick={handlerClick}>
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <div className={style.navLinks}></div>
        <Filters />
        <div>
          <SearchBar />
          <br />
          <NavLink to="/create" className={style.create}>¡Create your Pokémon!</NavLink>
        </div>
      </div>
    </div>
  );
}
