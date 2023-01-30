import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InfoNav = ({ className, id, stats }) => {
  const infoNavClassName = classNames('pokemon-info-nav', className);

  return (
    <>
    { stats && 
      <div className={infoNavClassName}>
        <p>{id}</p>
        <p className="pokemon-info-nav-hp">MAX HP</p>
        <p>{stats.map(stat => ( stat.stat.name === 'hp' ? stat.base_stat : null))}</p>
        <p className="pokemon-info-nav-cp">MAX CP</p>
        <p>{stats.map(stat => ( stat.stat.name === 'attack' ? stat.base_stat : null))}</p>
      </div>
    }
    </>
  );
};

InfoNav.propTypes = {
  className: PropTypes.string,
};

InfoNav.defaultProps = {
  className: null,
};

export default InfoNav;