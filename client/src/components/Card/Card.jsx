import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import styleColor from "./ColorsCard.module.css";

export default function Card(props) {

  function changeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function backgorundColors(type){
    switch (type) {
      case "normal":
        return styleColor.normal;
      case "fighting":
        return styleColor.fighting;
      case "flying":
        return styleColor.flying;
      case "poison":
        return styleColor.poison;
      case "ground":
        return styleColor.ground;
      case "rock":
        return styleColor.rock;
      case "bug":
        return styleColor.bug;
      case "ghost":
        return styleColor.ghost;
      case "steel":
        return styleColor.steel;
      case "fire":
        return styleColor.fire;
      case "water":
        return styleColor.water;
      case "grass":
        return styleColor.grass;
      case "electric":
        return styleColor.electric;
      case "psychic":
        return styleColor.psychic;
      case "ice":
        return styleColor.ice;
      case "dragon":
        return styleColor.dragon;
      case "dark":
        return styleColor.dark;
      case "fairy":
        return styleColor.fairy;
      case "unknown":
        return styleColor.unknown;
      case "shadow":
        return styleColor.shadow;
      default:
        return "";
    }
  }

  return (
    <div className={`${style.container} ${backgorundColors(props.types[0])}`}>
      <NavLink to = {`detail/${props.id}`}>
        <h1 className={style.title}>{changeString(props.name)}</h1>
      </NavLink>
      <img
        className={`${style.img} ${style.customImg}`}
        src={props.image}
        alt={props.name}
      />
      <div className={style.types}>
        {props.types.map((type) => (
          <span key={type} className={style.type}>
            {changeString(type)}
          </span>
        ))}
      </div>
    </div>
  );
}
