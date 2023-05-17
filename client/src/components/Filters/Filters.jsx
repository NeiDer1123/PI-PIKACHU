import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    filterByType,
  filterMaxMin,
  filterMinMax,
  filterPokemonAz,
  filterPokemonZa,
  getPokemons,
  getTypes,
} from "../../redux/actions";

export default function Filters() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handlerClick = (event) => {
    const { name } = event.target;
    switch (name) {
      case "A - Z":
        return dispatch(filterPokemonAz());
      case "Z - A":
        return dispatch(filterPokemonZa());
      case "PkCreados":
        return dispatch(filterMaxMin());
      case "Max - Min":
        return dispatch(filterMaxMin());
      case "Min - Max":
        return dispatch(filterMinMax());
      case "todos":
        return dispatch(getPokemons());
      default:
        return dispatch(filterByType(name))
    }
  };

  return (
    <div>
      <h3>Tipos</h3>
      <div>
        {types.map((type) => {
          return (
            <button
              key={type.name}
              name={type.name}
              onClick={(e) => handlerClick(e)}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      <h3 className={style.centerLabel}>Pokemon</h3>
      <div className={style.container}>
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
            <div className={style.column}>
              <button
                name="todos"
                onClick={(e) => handlerClick(e)}
                className={style.button}
              >
                All
              </button>
            </div>
            <div className={style.column}>
              <button
                name="creados"
                onClick={(e) => handlerClick(e)}
                className={style.button}
              >
                Creados
              </button>
            </div>
            <div className={style.column}>
              <button
                name="originales"
                onClick={(e) => handlerClick(e)}
                className={style.button}
              >
                Originales
              </button>
            </div>
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
    </div>
  );
}
