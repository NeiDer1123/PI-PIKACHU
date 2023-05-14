import axios from "axios";
import { GET_POKEMONS } from "./actions-types";

const getPokemons = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/pokemons");
    const pokemons = response.data;
    dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
};

// const getPokemon = (id) => {
//   return async function (dispatch) {
//     const response = await axios.get(
//       `http://localhost:3001/pokemons/${id}`
//     );
//     const pokemon = response.data;
//     dispatch({
//       type: GET_POKEMON,
//       payload: pokemon,
//     });
//   };
// };

export {
  getPokemons,
  // getPokemon
};
