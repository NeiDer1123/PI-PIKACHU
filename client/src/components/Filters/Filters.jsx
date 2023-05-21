
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

  function changeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      {/* <div>
        <button onClick={handleChange} value="todos">Restore</button>
      </div> */}
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
            <span className={style.label}>Alphabetically</span>
            <select onChange={handleChange} className={style.select}>
              <option value="A - Z">A - Z</option>
              <option value="Z - A">Z - A</option>
            </select>
          </div>
          <div className={style.column}>
            <span className={style.label}>Selection</span>
            <select onChange={handleChange} className={style.select}>
              <option value="todos">All</option>
              <option value="created">Created</option>
              <option value="originals">Originals</option>
            </select>
          </div>
          <div className={style.column}>
            <span className={style.label}>Attack Power</span>
            <select onChange={handleChange} className={style.select}>
              <option value="Max - Min">Max - Min</option>
              <option value="Min - Max">Min - Max</option>
            </select>
          </div>
          <div className={style.column}>
            <span className={style.label}>Types</span>
            <select onChange={handleChange} className={style.select}>
              {types.map((type) => (
                <option key={type.name} value={type.name}>
                  {changeString(type.name)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
