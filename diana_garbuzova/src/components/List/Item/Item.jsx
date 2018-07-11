import './Item.scss';
import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ItemContext } from '../../../modules/context';
import { checkAndGetItem } from '../../../utils/utils';
import Image from '../Image';

const Item = ({ children, pokemons, item }) => {
  const { id, name } = item;
  const checkedItem = checkAndGetItem(pokemons, item);
  return (
    <ItemContext.Provider value={checkedItem}>
      <li className='item'>
        <Link
          to={`/pokemon/${id}`}
          className='item__img'
        >
          <Image id={id} />
        </Link>
        <span className='item__name item__top'>{name}</span>
        {children}
      </li>
    </ItemContext.Provider>
  )
};

Item.propTypes = {
  children: PropTypes.element,
  dispatch: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  pokemons: state.pokedex.catchedPokemons,
});

export default connect(mapStateToProps)(Item);
