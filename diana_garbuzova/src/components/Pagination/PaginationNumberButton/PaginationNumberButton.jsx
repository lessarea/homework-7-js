import './PaginationNumberButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PaginationNumberButton = ({ onClick, name, page }) => (
  <NavLink
    to={`/page/${page}`}
    onClick={() => onClick(page)}
    className='button pagination__button pagination__button_number'
    activeClassName='pagination__button_active'
  >
    {name}
  </NavLink>
);

PaginationNumberButton.propTypes = {
  onClick: PropTypes.func,
  page: PropTypes.number,
  name: PropTypes.string,
};

export default PaginationNumberButton;
