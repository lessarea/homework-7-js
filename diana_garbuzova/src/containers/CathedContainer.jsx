import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatched } from '../modules/app/pokedex';
import List from '../components/List';

class CatchedContainer extends Component {
  componentDidMount() {
    const { dispatch, pokemons } = this.props;
    !pokemons && dispatch(getCatched());
  }

  render() {
    const { pokemons } = this.props;
    return (
      <List data={pokemons} />
    );
  }
}

CatchedContainer.propTypes = {
  dispatch: PropTypes.func,
  pokemons: PropTypes.array,
};

const mapStateToProps = state => ({
  pokemons: state.pokedex.catchedPokemons,
});

export default connect(mapStateToProps)(CatchedContainer);
