import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonById, getPokemonByName } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [idOrName, setIdOrName] = useState("");

  function handleInputChange(e) {
    setIdOrName(e.target.value);
  }

  function handleOnclick(){
    isNaN(idOrName) ? dispatch(getPokemonByName(idOrName)) : dispatch(getPokemonById(idOrName))
  } 

  return (
    <div>
      <input
        type="search"
        onChange={handleInputChange}
        placeholder="Busca un personaje..."
      />
      <button onClick={() => handleOnclick()}>Agregar</button>
    </div>
  );
}
