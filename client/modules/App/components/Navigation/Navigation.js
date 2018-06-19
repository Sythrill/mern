import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
    <div>
      <ul className="navbar">
        <li><Link to="/Home">HOME</Link></li>
        <li><Link to="/">POSTS</Link></li>
        <li><Link to="/About">ABOUT</Link></li>
      </ul>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};

Navigation.propTypes = {
};

export default Navigation;
