import {
  addToCatched,
  getCatchedPokemons,
  getCatchedPokemonById,
  getAllPokemons,
} from '../service';
import {
  CATCH_POKEMON,
  GET_CATCHED,
  GET_POKEMON,
  GET_POKEMONS
} from '../types';

const initialState = {
  allPokemons: null,
  catchedPokemons: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, allPokemons: action.payload };

    case GET_CATCHED:
      return { ...state, catchedPokemons: action.payload };

    case GET_POKEMON:
      return { ...state, pokemon: action.payload };

    case CATCH_POKEMON:
      return {
        ...state,
        catchedPokemons: [action.payload, ...state.catchedPokemons],
      };

    default: {
      return state;
    }
  }
};

export const getPokemons = () => (dispatch) => {
  getAllPokemons()
    .then((pokemons) => {
      dispatch({ type: GET_POKEMONS, payload: pokemons });
    });
};

export const getCatched = () => (dispatch) => {
  getCatchedPokemons()
    .then((pokemons) => {
      dispatch({ type: GET_CATCHED, payload: pokemons });
    });
};

export const getPokemon = id => (dispatch) => {
  getCatchedPokemonById(id)
    .then((pokemon) => {
      dispatch({ type: GET_POKEMON, payload: pokemon });
    });
};

export const catchPokemon = pokemon => (dispatch) => {
  const catchedPokemon = {
    pokemonId: pokemon.id,
    catchedDate: new Date(),
    ...pokemon,
  };
  addToCatched(catchedPokemon)
    .then(() => {
      dispatch({ type: CATCH_POKEMON, payload: catchedPokemon });
    });
};
