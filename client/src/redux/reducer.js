import { GET_POKEMONS, GET_TYPES, GET_POKEMON } from "./actions-types";

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

    case GET_POKEMON:
      return { ...state, pokemons: [action.payload] };

    default:
      return { ...state };
  }
}

export default rootReducer;
