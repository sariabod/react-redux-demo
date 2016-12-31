import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <nav id="main-nav"
        className="navbar navbar-default navbar-fixed-top main-nav">
      <div className="container">
        <div className="navbar-header">
          <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">

              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Demo</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="">
              <IndexLink to="/" activeClassName="active link">Home</IndexLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
