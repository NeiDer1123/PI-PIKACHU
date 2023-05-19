import { 
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  FILTER_A_Z, FILTER_Z_A,
  FILTER_MAX_MIN, FILTER_MIN_MAX,
  FILTER_BY_TYPE, 
  FILTER_CREATED} from "./actions-types";

const initialState = {
  pokemon: [],
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
      return { ...state, pokemons: action.payload, filteredPokemons: [], pokemon: [] };

    case GET_POKEMON_BY_ID:
      return { ...state, pokemon: action.payload, pokemons: [action.payload]};

    case GET_POKEMON_BY_NAME:
      return { ...state, pokemon: action.payload, pokemons: [action.payload]}

    case FILTER_A_Z:
      const pokemonsAz = pokemonsToFilter.slice().sort((a, b) => a.name.localeCompare(b.name));
      return { ...state, filteredPokemons: pokemonsAz };

    case FILTER_Z_A:
      const pokemonsZa = pokemonsToFilter.slice().sort((a, b) => a.name.localeCompare(b.name)).reverse();
      return { ...state, filteredPokemons: pokemonsZa };

    case FILTER_MAX_MIN:
      const pokemonsMaxMin = pokemonsToFilter.slice().sort((a, b) => b.attack - a.attack);
      return { ...state, filteredPokemons: pokemonsMaxMin };

    case FILTER_MIN_MAX:
      const pokemonsMinMax = pokemonsToFilter.slice().sort((a, b) => b.attack - a.attack).reverse();
      return { ...state, filteredPokemons: pokemonsMinMax };

    case FILTER_BY_TYPE:
      const pokemonsByType = state.pokemons.filter((pokemon) => {
        return pokemon.types.includes(action.payload);
      });
      return { ...state, filteredPokemons: pokemonsByType };
    
    case FILTER_CREATED:
      if(action.payload === "created" ){
        return { ...state, filteredPokemons: pokemonsToFilter.filter((pokemon)=> pokemon.created === true) }
      } else {
        return { ...state, filteredPokemons: pokemonsToFilter.filter((pokemon)=> pokemon.created === false) }
      }


    default:
      return { ...state };
  }
}

export default rootReducer;
