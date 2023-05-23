import axios from "axios";
import {
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  FILTER_A_Z,
  FILTER_Z_A,
  FILTER_CREATED,
  FILTER_MAX_MIN,
  FILTER_MIN_MAX,
  FILTER_BY_TYPE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  RESET_PAGE,
  GET_ALL,
  RESTORE,
} from "./actions-types";

const getTypes = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/types");
    const types = response.data;
    dispatch({
      type: GET_TYPES,
      payload: types,
    });
  };
};

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

const getPokemonById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
      const pokemon = response.data;
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: pokemon,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

const getPokemonByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons/name?name=${name}`
      );
      const pokemon = response.data[0];
      dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

const filterPokemonAz = () => {
  return {
    type: FILTER_A_Z,
  };
};

const filterPokemonZa = () => {
  return {
    type: FILTER_Z_A,
  };
};

const filterPokemonCreated = () => {};

const filterMaxMin = () => {
  return {
    type: FILTER_MAX_MIN,
  };
};

const filterMinMax = () => {
  return {
    type: FILTER_MIN_MAX,
  };
};

const filterByType = (type) => {
  return {
    type: FILTER_BY_TYPE,
    payload: type,
  };
};

const filterCreated = (typeFilter) => {
  return {
    type: FILTER_CREATED,
    payload: typeFilter,
  };
};

const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

const previousPage = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

const resetPage = () => {
  return {
    type: RESET_PAGE,
  };
};

const getAll = () => {
  return {
    type: GET_ALL
  }
}

const restore = () => {
  return {
    type: RESTORE
  }
}

export {
  getPokemons,
  getTypes,
  getPokemonById,
  getPokemonByName,
  filterPokemonAz,
  filterPokemonZa,
  filterPokemonCreated,
  filterMaxMin,
  filterMinMax,
  filterByType,
  filterCreated,
  nextPage,
  previousPage,
  resetPage,
  getAll,
  restore
};
