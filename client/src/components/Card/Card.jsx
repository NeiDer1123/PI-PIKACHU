import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { backgorundButtons, backgorundDiv, changeString } from "../../utils/functionsStyles";


export default function Card(props) {

  return (
    <div className={style.container}>
      <div className={`${style.character} `}>
        <div className={`${style.div} ${backgorundDiv(props.types[0])}`}>DS</div>
        <div className={style.containerImage}>
          <h1 className={style.title}>{changeString(props.name)}</h1>
          <NavLink to={`detail/${props.id}`}>
            <img
              className={`${style.customImg}`}
              src={props.image}
              alt={props.name}
            />
          </NavLink>
        </div>
      </div>
      <div className={style.types}>
        {props.types.map((type) => (
          <span
            key={type}
            className={`${style.type} ${backgorundButtons(type)}`}
          >
            {changeString(type)}
          </span>
        ))}
      </div>
    </div>
  );
}
