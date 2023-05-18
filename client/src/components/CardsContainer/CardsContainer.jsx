import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

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

  const pokemons = useSelector(selectFilteredPokemons);

  return (
    <div>
      {pokemons.length === 0 && <div>Loading...</div> }
      <div className={style.container}>
        {pokemons.map((poke, index) => {
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
