import CatchedContainer from './containers/CathedContainer';
import MainContainer from './containers/MainContainer';
import PokemonContainer from './containers/PokemonContainer';

export default [
  {
    path: '/page/:page',
    component: MainContainer,
    exact: true,
  }, {
    path: '/pokemons/catched',
    component: CatchedContainer,
  }, {
    path: '/pokemon/:id',
    component: PokemonContainer,
  }, {
    component: MainContainer,
  }
]

