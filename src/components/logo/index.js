import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = ({ className }) => {
  const logoClassName = classNames('pokemon-logo', className);

  return (
    <div className={logoClassName}>
      <span className="pokemon-logo__icon"></span>
      <span className="pokemon-logo__pogo">PoGo</span>
      <span className="pokemon-logo__guide">Guide</span>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: null,
};

export default Logo;