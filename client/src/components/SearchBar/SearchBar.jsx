import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonById, getPokemonByName, resetPage, restore} from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [idOrName, setIdOrName] = useState("");

  function handleInputChange(e) {
    setIdOrName(e.target.value);
  }

  function handleOnclick() {
    isNaN(idOrName)
    ? dispatch(getPokemonByName(idOrName))
    : dispatch(getPokemonById(idOrName));

    dispatch(resetPage())
    dispatch(restore())
  }

  return (
    <div className={style.searchBar}>
      <input
        className={style.searchInput}
        type="search"
        onChange={handleInputChange}
        placeholder="Search for a character..."
      />
      <button className={style.searchButton} onClick={handleOnclick}>
        Search
      </button>
    </div>
  );
}

