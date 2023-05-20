
import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterByType,
  filterCreated,
  filterMaxMin,
  filterMinMax,
  filterPokemonAz,
  filterPokemonZa,
  getPokemons,
  getTypes,
  resetPage
} from "../../redux/actions";

export default function Filters() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(resetPage())
    switch (value) {
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
      case "created":
        return dispatch(filterCreated(value))
      case "originals":
        return dispatch(filterCreated(value))
      default:
        return dispatch(filterByType(value));
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleChange} value="todos">Restore</button>
      </div>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
            <span className={style.label}>Alfabeticamente</span>
            <select onChange={handleChange}>
              <option value="A - Z">A - Z</option>
              <option value="Z - A">Z - A</option>
            </select>
          </div>
          <div className={style.column}>
            <span className={style.label}>Seleccion</span>
            <select onChange={handleChange}>
              <option value="todos">Todos</option>
              <option value="created">Creados</option>
              <option value="originals">Originales</option>
            </select>
          </div>
          <div className={style.column}>
            <span className={style.label}>Poder de ataque</span>
            <select onChange={handleChange}>
              <option value="Max - Min">Max - Min</option>
              <option value="Min - Max">Min - Max</option>
            </select>
          </div>
          <div className={style.column}>
            <span className={style.label}>Tipos</span>
            <select onChange={handleChange}>
              {types.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
