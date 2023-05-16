import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  function handleInputChange(e) {
    setId(e.target.value);
  }

  function handleOnclick(){
    dispatch(getPokemon(id))
  } 

  return (
    <div>
      <input
        type="search"
        onChange={handleInputChange}
        placeholder="Busca un personaje..."
      />
      <button onClick={() => handleOnclick(id)}>Agregar</button>
    </div>
  );
}
