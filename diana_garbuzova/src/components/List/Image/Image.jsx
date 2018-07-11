import './Image.scss';
import React from 'react';

const Image = ({ id }) => {
  const src = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`;
  return (
    <img src={src} alt='pokemon' className='item__img' />
  );
};

export default Image;
