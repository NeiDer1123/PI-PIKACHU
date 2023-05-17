import { GET_POKEMONS, GET_TYPES, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, FILTER_A_Z, FILTER_Z_A, FILTER_MAX_MIN, FILTER_MIN_MAX } from "./actions-types";

const initialState = {
  pokemons: [],
  // pokemon: [],
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_BY_ID:
      return { ...state, pokemons: [action.payload] };

    case GET_POKEMON_BY_NAME:
      return { ...state, pokemons: [action.payload]}
    
    case FILTER_A_Z:
      const pokemonsAz = state.pokemons.slice().sort((a,b)=> a.name.localeCompare(b.name))
      console.log(pokemonsAz)
      return {...state, pokemons: pokemonsAz }

    case FILTER_Z_A:
      const pokemonsZa = state.pokemons.slice().sort((a,b)=> a.name.localeCompare(b.name)).reverse()
      console.log(pokemonsZa)
      return {...state, pokemons: pokemonsZa }

    case FILTER_MAX_MIN:
      const pokemonsMaxMin = state.pokemons.slice().sort((a, b) => b.attack - a.attack)
      console.log(pokemonsMaxMin)
      return {...state, pokemons: pokemonsMaxMin }

    case FILTER_MIN_MAX:
      const pokemonsMinMax = state.pokemons.slice().sort((a, b) => b.attack - a.attack).reverse()
      console.log(pokemonsMinMax)
      return {...state, pokemons: pokemonsMinMax }
          
    default:
      return { ...state };
  }
}

export default rootReducer;
