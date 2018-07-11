import './Pokemon.scss';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Image from '../List/Image';

const Pokemon = ({ id, pokemon }) => {
  const { name, catched } = pokemon;
  const { catchedDate } = catched.length >= 1 && catched[0];
  const dateString = moment(catchedDate).fromNow();
  const status = `Status: ${catchedDate
    ? `catched ${dateString}`
    : 'not catched'}`;
  return (
    <div className='container'>
      <div className='item'>
        <Image id={id} />
        <p className='item__status item__top'>
          <span className='item__name'>{name}</span>
          <span className='item__text'>{status}</span>
        </p>
        <p className='item__id'>
          <span className='item__text'>ID: </span>
          <span className='item__id-number'>{id}</span>
        </p>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  id: PropTypes.string.isRequired,
  pokemon: PropTypes.object,
};

export default Pokemon;
