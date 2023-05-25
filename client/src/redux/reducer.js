import { 
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  FILTER_A_Z, FILTER_Z_A,
  FILTER_MAX_MIN, FILTER_MIN_MAX,
  FILTER_BY_TYPE, 
  FILTER_CREATED,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  RESET_PAGE,
  GET_ALL,
  RESTORE} from "./actions-types";

const initialState = {
  pokemon: [],
  pokemons: [],
  filteredPokemons: [],
  filteredByType: [],
  general: [],
  types: [],
  page: 0
};

// Me permite obtener el estado que deseo.
function pokemonsFilter(state){
  if (state.filteredByType.length > 0 && state.filteredByType.length > state.filteredPokemons.length ){
    return state.filteredByType;
  } else if (state.filteredPokemons.length > 0){
    return state.filteredPokemons;
  } else {
    return state.pokemons;
  }
}

function rootReducer(state = initialState, action) {

  let pokemonsToFilter = pokemonsFilter(state);

  switch (action.type) {
    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, general: action.payload};

    case GET_POKEMON_BY_ID:
      return { ...state, pokemon: action.payload, pokemons: [action.payload]};

    case GET_POKEMON_BY_NAME:
      return { ...state, pokemon: action.payload, pokemons: [action.payload]};

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
      const pokemonsByType = state.general.filter((pokemon) => {
        return pokemon.types.includes(action.payload);
      });
      return { ...state, filteredPokemons: pokemonsByType, filteredByType: pokemonsByType  };
    
    case FILTER_CREATED:
      if(action.payload === "created" ){
        if (state.filteredByType.length <= 0){
          return { ...state, filteredPokemons: state.pokemons.filter((pokemon)=> pokemon.created === true) };
        } else {
          return { ...state, filteredPokemons: pokemonsToFilter.filter((pokemon)=> pokemon.created === true) };
        }
      } else {
        if (state.filteredByType.length <= 0){
          return { ...state, filteredPokemons: state.pokemons.filter((pokemon)=> pokemon.created === false) };
        } else {
          return { ...state, filteredPokemons: pokemonsToFilter.filter((pokemon)=> pokemon.created === false) };
        }
      }
      
    case NEXT_PAGE:
      return {...state, page: state.page + 12 };

    case PREVIOUS_PAGE:
      return {...state, page: state.page - 12 };

    case RESET_PAGE:
      return {...state, page: 0 };

    case GET_ALL: 
    if(state.filteredPokemons.length > 0){
      return {...state, pokemons: state.filteredPokemons, pokemon: []} // Condicional para que me renderice segun los filtros ya realizados
    } else {
      return {...state, pokemons: state.general, filteredPokemons: [], pokemon: [], filteredByType: []}
    }

    case RESTORE:
      return {...state, pokemons: state.general, filteredPokemons: [], pokemon: [], filteredByType: []}

    default:
      return { ...state };
  }
}

export default rootReducer;




// function rootReducer(state = initialState, action) {

//   let pokemonsToFilter = pokemonsFilter(state);

//   switch (action.type) {
//     case GET_TYPES:
//       return { ...state, types: action.payload };

//     case GET_POKEMONS:
//       return { ...state, pokemons: action.payload, general: action.payload};

//     case GET_POKEMON_BY_ID:
//       return { ...state, pokemon: action.payload, pokemons: [action.payload], filteredPokemons: [action.payload]};

//     case GET_POKEMON_BY_NAME:
//       return { ...state, pokemon: action.payload, pokemons: [action.payload], filteredPokemons: [action.payload]};

//     case FILTER_A_Z:
//       const pokemonsAz = pokemonsToFilter.slice().sort((a, b) => a.name.localeCompare(b.name));
//       return { ...state, filteredPokemons: pokemonsAz };

//     case FILTER_Z_A:
//       const pokemonsZa = pokemonsToFilter.slice().sort((a, b) => a.name.localeCompare(b.name)).reverse();
//       return { ...state, filteredPokemons: pokemonsZa };

//     case FILTER_MAX_MIN:
//       const pokemonsMaxMin = pokemonsToFilter.slice().sort((a, b) => b.attack - a.attack);
//       return { ...state, filteredPokemons: pokemonsMaxMin };

//     case FILTER_MIN_MAX:
//       const pokemonsMinMax = pokemonsToFilter.slice().sort((a, b) => b.attack - a.attack).reverse();
//       return { ...state, filteredPokemons: pokemonsMinMax };

//     case FILTER_BY_TYPE:
//       const pokemonsByType = state.pokemons.filter((pokemon) => {
//         return pokemon.types.includes(action.payload);
//       });
//       return { ...state, filteredPokemons: pokemonsByType, filteredByType: pokemonsByType  };
    
//     case FILTER_CREATED:
//       if(action.payload === "created" ){
//         if (state.filteredByType.length <= 0){
//           return { ...state, filteredPokemons: state.pokemons.filter((pokemon)=> pokemon.created === true) };
//         } else {
//           return { ...state, filteredPokemons: pokemonsToFilter.filter((pokemon)=> pokemon.created === true) };
//         }
//       } else {
//         if (state.filteredByType.length <= 0){
//           return { ...state, filteredPokemons: state.pokemons.filter((pokemon)=> pokemon.created === false) };
//         } else {
//           return { ...state, filteredPokemons: pokemonsToFilter.filter((pokemon)=> pokemon.created === false) };
//         }
//       }
      
//     case NEXT_PAGE:
//       return {...state, page: state.page + 12 };

//     case PREVIOUS_PAGE:
//       return {...state, page: state.page - 12 };

//     case RESET_PAGE:
//       return {...state, page: 0 };

//     case GET_ALL: 
//       return {...state, pokemons: state.general, filteredPokemons: [], pokemon: [], filteredByType: []}

//     default:
//       return { ...state };
//   }
// }

