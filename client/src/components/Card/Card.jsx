import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {

  return (
    <div className={style.container}>
      <NavLink to = {`detail/${props.id}`}>
        <h1 className={style.title}>{props.name}</h1>
      </NavLink>
      <img
        className={`${style.img} ${style.customImg}`}
        src={props.image}
        alt={props.name}
      />
      <div className={style.types}>
        {props.types.map((type) => (
          <span key={type} className={style.type}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}
