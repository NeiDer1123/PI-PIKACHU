import { GET_POKEMONS, GET_TYPES, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME } from "./actions-types";

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

    default:
      return { ...state };
  }
}

export default rootReducer;
