import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import AddEditForm from '../../components/AddEditForm';

index.propTypes = {};

function index(props) {
  return (
    <div className="container">
      <Header />
      <AddEditForm />
    </div>
  );
}

export default index;
