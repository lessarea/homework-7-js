import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { catchPokemon, getCatched, getPokemons } from '../modules/app/pokedex';
import { getPokemonsByPage } from '../utils/utils';
import List from '../components/List';
import CatchButton from '../components/CatchButton';
import PaginationContainer from './PaginationContainer';

const PAGE_SIZE = 10;

class MainContainer extends Component {
  state = {
    pageOfPokemons: null,
  };

  componentDidMount() {
    const { dispatch, pokemons, catchedPokemons } = this.props;
    !pokemons && dispatch(getPokemons());
    !catchedPokemons && dispatch(getCatched());
  }

  onPageChange = page => {
    const { pokemons } = this.props;
    const pageOfPokemons = getPokemonsByPage(pokemons, page, PAGE_SIZE);
    this.setState({ pageOfPokemons });
  };

  onCatchClick = item => {
    const { dispatch } = this.props;
    dispatch(catchPokemon(item))
  };

  render() {
    const { pokemons, match, initialPage } = this.props;
    const { pageOfPokemons } = this.state;
    const page = match.params.page || initialPage;
    const currentPage = pageOfPokemons
      || getPokemonsByPage(pokemons, page, PAGE_SIZE);
    return (
      <Fragment>
        <List data={currentPage}>
          <CatchButton onCatchCLick={this.onCatchClick} />
        </List>
        {pokemons && <PaginationContainer
          count={pokemons.length}
          onChange={() => this.onPageChange}
          pageSize={PAGE_SIZE}
        />}
      </Fragment>
    );
  }
}

MainContainer.propTypes = {
  dispatch: PropTypes.func,
  pokemons: PropTypes.array,
  catchedPokemons: PropTypes.array,
};

MainContainer.defaultProps = {
  initialPage: 1,
};

const mapStateToProps = state => ({
  pokemons: state.pokedex.allPokemons,
  catchedPokemons: state.pokedex.catchedPokemons,
});

export default connect(mapStateToProps)(MainContainer);
