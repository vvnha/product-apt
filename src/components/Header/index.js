import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

index.propTypes = {};

function index(props) {
  return (
    <header>
      <nav className="top-nav shadow-sm py-3">
        <div className="container">
          <ul className="nav justify-content-between align-items-center">
            <li className="nav-item">
              <a className="nav__link" href="abc">
                <img
                  className="nav__logo"
                  src="/logo192.png"
                  alt="Logo Nordic Coder"
                />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav__link" href="add-edit-post.html">
                <i className="fas fa-plus-circle mr-1"></i>Add new post
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default index;
