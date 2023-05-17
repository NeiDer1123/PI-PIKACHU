import { 
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  FILTER_A_Z, FILTER_Z_A,
  FILTER_MAX_MIN, FILTER_MIN_MAX,
  FILTER_BY_TYPE } from "./actions-types";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
};

function rootReducer(state = initialState, action) {

  let pokemonsToFilter = state.filteredPokemons.length > 0 ? state.filteredPokemons : state.pokemons;


  switch (action.type) {
    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, filteredPokemons: [] };

    case GET_POKEMON_BY_ID:
      return { ...state, pokemons: [action.payload] };

    case GET_POKEMON_BY_NAME:
      return { ...state, pokemons: [action.payload]}

    case FILTER_A_Z:
      const pokemonsAz = pokemonsToFilter.slice().sort((a, b) => a.name.localeCompare(b.name));
      console.log(pokemonsAz);
      return { ...state, filteredPokemons: pokemonsAz };

    case FILTER_Z_A:
      const pokemonsZa = pokemonsToFilter.slice().sort((a, b) => a.name.localeCompare(b.name)).reverse();
      console.log(pokemonsZa);
      return { ...state, filteredPokemons: pokemonsZa };

    case FILTER_MAX_MIN:
      const pokemonsMaxMin = pokemonsToFilter.slice().sort((a, b) => b.attack - a.attack);
      console.log(pokemonsMaxMin);
      return { ...state, filteredPokemons: pokemonsMaxMin };

    case FILTER_MIN_MAX:
      const pokemonsMinMax = pokemonsToFilter.slice().sort((a, b) => b.attack - a.attack).reverse();
      console.log(pokemonsMinMax);
      return { ...state, filteredPokemons: pokemonsMinMax };

    case FILTER_BY_TYPE:
      const pokemonsByType = state.pokemons.filter((pokemon) => {
        return pokemon.types.includes(action.payload);
      });
      console.log(pokemonsByType);
      return { ...state, filteredPokemons: pokemonsByType };

    default:
      return { ...state };
  }
}

export default rootReducer;
