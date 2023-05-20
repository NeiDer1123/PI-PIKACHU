import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
// import { useState } from "react";
import { nextPage, previousPage } from "../../redux/actions";

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

  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.page)
  const pokemons = useSelector(selectFilteredPokemons);
  const pokemonsPerPage = 12

  const filteredPokemon = pokemons.slice(currentPage, currentPage + pokemonsPerPage);

  const next = () => {
    if (filteredPokemon.length < pokemonsPerPage) {
      return;
    }
    dispatch(nextPage());
  };

  const previous = () => {
    if (currentPage > 0) {
      dispatch(previousPage());
    }
  };

  return (
    <div>
      <button onClick={previous}>Anteriores</button>
      <button onClick={next}>Siguientes</button>
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
