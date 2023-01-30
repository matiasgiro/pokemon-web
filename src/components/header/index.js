import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Logo from '../logo';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';

const Header = ({ className, handleOnChange }) => {
  const headerClassName = classNames('pokemon__header', className);

  return (
    <div className={headerClassName}>
      <Logo />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Pokemon</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Friends</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Me</Breadcrumb.Item>
      </Breadcrumb>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
          onChange={handleOnChange}
        />
      </Form>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};

export default Header;