import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { filterMaxMin, filterMinMax, filterPokemonAz, filterPokemonZa,  } from "../../redux/actions";

export default function Filters() {
  const dispatch = useDispatch();

  const handlerClick = (event) => {
    const { name } = event.target;
    switch (name) {
      case "A - Z":
        return  dispatch(filterPokemonAz());
      case "Z - A":
        return dispatch(filterPokemonZa());
      case "PkCreados":
        return dispatch(filterMaxMin());
      case "Max - Min":
        return dispatch(filterMaxMin());
      case "Min - Max":
        return dispatch(filterMinMax());
      default:
        return alert("No fue posible filtrar");
    }
  };

  return (
    <div className={style.container}>
      <h1>Aqui puedes filtrar</h1>
      <div className={style.row}>
        <div className={style.column}>
          <span className={style.label}>Alfabeticamente</span>
          <button
            name="A - Z"
            onClick={(e) => handlerClick(e)}
            className={style.button}
          >
            A - Z
          </button>
          <button
            name="Z - A"
            onClick={(e) => handlerClick(e)}
            className={style.button}
          >
            Z - A
          </button>
        </div>
        <div className={style.column}>
          <button
            name="PkCreados"
            onClick={(e) => handlerClick(e)}
            className={style.button}
          >
            Pokemones Creados
          </button>
        </div>
        <div className={style.column}>
          <span className={style.label}>Poder de ataque</span>
          <button
            name="Max - Min"
            onClick={(e) => handlerClick(e)}
            className={style.button}
          >
            Max - Min
          </button>
          <button
            name="Min - Max"
            onClick={(e) => handlerClick(e)}
            className={style.button}
          >
            Min - Max
          </button>
        </div>
      </div>
    </div>
  );
}
