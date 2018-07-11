import { combineReducers } from 'redux';

import pokedexReducer from './app/pokedex';

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
});

export default rootReducer;
