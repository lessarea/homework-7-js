import './PaginationItem.scss';
import React from 'react';
import PropTypes from 'prop-types';

const PaginationItem = ({ children }) => (
  <li className='pagination__item'>
    {children}
  </li>
);

PaginationItem.propTypes = {
  children: PropTypes.element,
};

export default PaginationItem;
