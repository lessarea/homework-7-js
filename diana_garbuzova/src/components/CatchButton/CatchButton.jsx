import './CatchButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { catchPokemon } from '../../modules/app/pokedex';
import { ItemContext } from '../../modules/context';

const CatchButton = ({ dispatch }) => (
  <ItemContext.Consumer>
    {item => (
      <button
        type='button'
        onClick={() => dispatch(catchPokemon(item))}
        className={`button item__button button_green
              ${item.catchedDate ? 'button_disabled' : ''}`}
      >
        Catch
      </button>
    )}
  </ItemContext.Consumer>
);

CatchButton.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(CatchButton);
