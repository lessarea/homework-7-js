import './Pagination.scss';
import React from 'react';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';
import PaginationButton from './PaginationButton';
import PaginationNumberButton from './PaginationNumberButton';

const Pagination = ({ pages, currentPage, totalPages, ...props }) => (
  <ul className='list container pagination'>
    <PaginationItem>
      <PaginationButton
        endPointPage={1}
        currentPage={currentPage}
        page={1}
        name='<<'
        {...props}
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationButton
        endPointPage={1}
        currentPage={currentPage}
        page={currentPage - 1}
        name='Previous'
        {...props}
      />
    </PaginationItem>

    {pages.map((page, idx) => (
      <PaginationItem key={idx}>
        <PaginationNumberButton
          endPointPage={page}
          currentPage={currentPage}
          exClass='pagination__button_active'
          page={page}
          name={page.toString()}
          {...props}
        />
      </PaginationItem>
    ))}

    <PaginationItem>
      <PaginationButton
        endPointPage={totalPages}
        currentPage={currentPage}
        page={currentPage + 1}
        name='Next'
        {...props}
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationButton
        endPointPage={totalPages}
        currentPage={currentPage}
        page={totalPages}
        name='>>'
        {...props}
      />
    </PaginationItem>
  </ul>
);

Pagination.propTypes = {
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
