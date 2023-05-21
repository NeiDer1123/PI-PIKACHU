import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import logo from "../../assets/logo.png";

export default function Landing() {
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
