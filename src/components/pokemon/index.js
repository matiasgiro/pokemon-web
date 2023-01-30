import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'react-bootstrap/Image'
import InfoNav from '../info-nav'
import { useNavigate } from 'react-router-dom';

const Pokemon = ({ className, name, abilities, image, id, stats, height, weight }) => {
  const pokemonClassName = classNames('pokemon', className);
  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  }

  return (
    <div className={pokemonClassName} onClick={() => redirect(`/pokemon?id=${id}`)}>
      <div>
        <Image src={image} />
      </div>
      <div className="pokemon__info">
        <p className='pokemon__info-name'>{name}</p>
        <p className='pokemon__info-ability'>{abilities && abilities.map((res, i )=> (abilities.length - 1) === i ? res.ability.name : res.ability.name + ' / ')}</p>
        <InfoNav id={id} stats={stats} />
        <div className='pokemon__info-row'>
          <div>
            <p>Height:</p>
            <p>{height}</p>
          </div>
          <div>
            <p>Generation:</p>
            <p>I</p>
          </div>
        </div>
        <div className='pokemon__info-row'>
          <div>
            <p>Weight:</p>
            <p>{weight}</p>
          </div>
          <div>
            <p>Candy:</p>
            <p>-</p>
          </div>
        </div>
      </div>       
    </div>
  );
};

Pokemon.propTypes = {
  className: PropTypes.string,
};

Pokemon.defaultProps = {
  className: null,
};

export default Pokemon;