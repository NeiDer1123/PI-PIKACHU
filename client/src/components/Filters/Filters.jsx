
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
  getTypes,
  resetPage,
  restore
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
      case "allPokemons":
        return dispatch(restore());
      case "all":
        return dispatch(filterCreated(value));
      case "created":
        return dispatch(filterCreated(value));
      case "originals":
        return dispatch(filterCreated(value));
      default:
        return dispatch(filterByType(value));
    }
  };

  function changeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <div>
        <button className={style.resetButton} onClick={handleChange} value="allPokemons">Restore</button>
      </div>
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
              <option value="all">All</option>
              <option value="originals">Originals</option>
              <option value="created">Created</option>
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
