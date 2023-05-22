import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <img src={logo} alt="logo" className={style.logo} />
      <div>
        <NavLink to="/home" className={style.navlink}>
          HOME
        </NavLink>
      </div>
    </div>
  );
}
