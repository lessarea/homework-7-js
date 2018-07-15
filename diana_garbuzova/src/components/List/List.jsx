import './List.scss';
import PropTypes from 'prop-types';
import React from 'react';

import NoContent from '../NoContent';
import Spinner from '../Spinner';
import Item from './Item';

const List = ({ children, data }) => (
  !data
    ? <Spinner />
    : data.length === 0
      ? <NoContent />
      : (
        <ul className='container list pokemon__list'>
          {data.map(item => (
            <Item key={item.id} item={item}>
              {children}
            </Item>
          ))}
        </ul>
      )
);

List.propTypes = {
  children: PropTypes.element,
  data: PropTypes.array,
};

export default List;
