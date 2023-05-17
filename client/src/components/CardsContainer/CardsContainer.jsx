import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer() {

const selectFilteredPokemons = (state) => {
  if (state.filteredPokemons.length > 0) {
    return state.filteredPokemons;
  }
  return state.pokemons;
};

  const pokemons = useSelector(selectFilteredPokemons)

  return (
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
  );
}
