import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Pagination from '../../components/Pagination';
import './index.scss';

Home.propTypes = {};

function Home(props) {
  return (
    <div className="container">
      <Header />
      <Slide />

      <div className="posts-section">
        <div className="row posts-list justify-content-center ps-0">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Pagination />
    </div>
  );
}

export default Home;
