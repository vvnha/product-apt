import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetail';
import './index.scss';

index.propTypes = {};

function index(props) {
  return (
    <div className="container">
      <Header />
      <ProductDetail />
    </div>
  );
}

export default index;
