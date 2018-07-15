import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../modules/app/pokedex';
import Pokemon from '../components/Pokemon';
import Spinner from '../components/Spinner';

class PokemonContainer extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getPokemon(match.params.id));
  }

  render() {
    const { pokemon } = this.props;
    return (
      pokemon
        ? <Pokemon pokemon={pokemon} />
        : <Spinner />
    );
  }
}

PokemonContainer.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func,
  pokemon: PropTypes.object,
};

const mapStateToProps = state => ({
  pokemon: state.pokedex.pokemon,
});

export default connect(mapStateToProps)(PokemonContainer);
