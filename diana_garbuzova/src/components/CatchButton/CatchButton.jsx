import './CatchButton.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { ItemContext } from '../../modules/context';

const CatchButton = ({ onCatchCLick }) => (
  <ItemContext.Consumer>
    {item => {
      const isCatched = item.catchedDate;
      const handleCatchClick = () => onCatchCLick(item);
      return (
        <button
          type='button'
          onClick={handleCatchClick}
          disabled={isCatched}
          className={`button item__button button_green
                ${isCatched ? 'button_disabled' : ''}`}
        >
          Catch
        </button>
      );
    }}
  </ItemContext.Consumer>
);

CatchButton.propTypes = {
  onCatchCLick: PropTypes.func,
};

export default CatchButton;
