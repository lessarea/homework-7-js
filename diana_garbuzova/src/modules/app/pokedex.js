import {
  addToCatched,
  getCatchedPokemons,
  getCatchedPokemonById,
  getAllPokemons,
} from '../service';

const initialState = {
  allPokemons: null,
  catchedPokemons: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'getPokemons':
      return { ...state, allPokemons: action.payload };

    case 'getCatched':
      return { ...state, catchedPokemons: action.payload };

    case 'getPokemon':
      return { ...state, pokemon: action.payload };

    case 'catchPokemon':
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
      dispatch({ type: 'getPokemons', payload: pokemons });
    });
};

export const getCatched = () => (dispatch) => {
  getCatchedPokemons()
    .then((pokemons) => {
      dispatch({ type: 'getCatched', payload: pokemons });
    });
};

export const getPokemon = id => (dispatch) => {
  getCatchedPokemonById(id)
    .then((pokemon) => {
      dispatch({ type: 'getPokemon', payload: pokemon });
    });
};

export const catchPokemon = pokemon => (dispatch) => {
  const catchedPokemon = {
    pokemonId: pokemon.id,
    catchedDate: new Date(),
    ...pokemon,
  };
  addToCatched(catchedPokemon)
    .then(() => dispatch({ type: 'catchPokemon', payload: catchedPokemon }));
};
