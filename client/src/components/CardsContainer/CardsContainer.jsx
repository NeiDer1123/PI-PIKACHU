import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useState } from "react";
// import { Paginate } from "..";

export default function CardsContainer() {
  const selectFilteredPokemons = (state) => {
    if (state.filteredPokemons.length > 0) {
      return state.filteredPokemons;
    }
    if (state.pokemon.length > 0) {
      return state.pokemon;
    }
    return state.pokemons;
  };

  const [currentPage, setCurrentPage] = useState(0);
  const pokemons = useSelector(selectFilteredPokemons);
  const pokemonsPerPage = 12

  const filteredPokemon = pokemons.slice(currentPage, currentPage + pokemonsPerPage);
  console.log(filteredPokemon)

  const nextPage = () => {
    if (filteredPokemon.length < pokemonsPerPage) {
      return;
    }
    setCurrentPage(currentPage + pokemonsPerPage);
  };

  const previusPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - pokemonsPerPage);
    }
  };

  return (
    <div>
      <button onClick={previusPage}>Anteriores</button>
      <button onClick={nextPage}>Siguientes</button>
      {pokemons.length === 0 && <div>Loading...</div>}
      <div className={style.container}>
        {filteredPokemon.map((poke, index) => {
          return (
            <Card
              key={index}
              id={poke.id}
              name={poke.name}
              image={poke.image}
              types={poke.types}
            />
          );
        })}
      </div>
    </div>
  );
}
