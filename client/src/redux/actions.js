import axios from "axios";
import { GET_POKEMONS, GET_TYPES, GET_POKEMON } from "./actions-types";


const getTypes = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/types");
    const types = response.data;
    dispatch({
      type: GET_TYPES,
      payload: types,
    });
  };
}

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

const getPokemon = (id) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/pokemons/${id}`
    );
    const pokemon = response.data;
    console.log(pokemon)
    dispatch({
      type: GET_POKEMON,
      payload: pokemon,
    });
  };
};

export {
  getPokemons,
  getTypes,
  getPokemon
};
