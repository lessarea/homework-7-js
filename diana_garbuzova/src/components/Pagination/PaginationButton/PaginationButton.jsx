import './PaginationButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PaginationButton = ({
  onClick, page, name, currentPage, endPointPage,
}) => {
  const exClassName = `${currentPage === endPointPage ? 'pagination__button_disabled' : ''}`;
  const handlePageClick = () => onClick(page);
  return (
    <Link
      to={`/page/${page}`}
      onClick={handlePageClick}
      className={`button pagination__button pagination__button_nav ${exClassName}`}
    >
      {name}
    </Link>
  );
};

PaginationButton.propTypes = {
  onClick: PropTypes.func,
  page: PropTypes.number,
  name: PropTypes.string,
  currentPage: PropTypes.number,
  endPointPage: PropTypes.number,
};

export default PaginationButton;
