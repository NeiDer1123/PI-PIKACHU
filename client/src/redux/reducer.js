import { GET_POKEMONS } from "./actions-types";

const initialState = {
  pokemons: [],
  pokemon: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      console.log(action.payload);
      return { ...state, pokemons: action.payload };

    // case GET_POKEMON:
    //   return {...state, pokemon: action.payload }

    default:
      return { ...state };
  }
}

export default rootReducer;
