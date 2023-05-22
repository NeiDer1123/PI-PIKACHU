import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import Paginate from "../Paginate/Paginate";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import pokebola from '../../assets/pokebola.gif'

export default function CardsContainer() {
  const posicion = useLocation();
  console.log(posicion);

  const selectFilteredPokemons = (state) => {
    if (state.filteredPokemons.length > 0) {
      return state.filteredPokemons;
    }
    if (state.pokemon.length > 0) {
      return state.pokemon;
    }
    return state.pokemons;
  };

  const currentPage = useSelector((state) => state.page);
  const pokemonsPerPage = 12;
  const pokemons = useSelector(selectFilteredPokemons);

  const filteredPokemon = pokemons.slice(
    currentPage,
    currentPage + pokemonsPerPage
  );

  return (
    <div className={style.containerAll}>
      <Paginate
        pokemonsPerPage={pokemonsPerPage}
        filteredPokemon={filteredPokemon}
        currentPage={currentPage}
      />
      <div>
        {pokemons.length === 0 && (
          <div>
            {/* <div>Loading...</div> */}
            <img src={pokebola} alt="pokebola" />
          </div>
        )}
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
        <div>
          <Paginate
            pokemonsPerPage={pokemonsPerPage}
            filteredPokemon={filteredPokemon}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
