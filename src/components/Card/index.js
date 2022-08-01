import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

Card.propTypes = {};

function Card(props) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="post-item mb-4">
        <div className="card">
          <img
            data-id="thumbnail"
            src="https://source.unsplash.com/y3aP9oo9Pjc/300X200"
            className="card-img-top"
            alt="recipe"
          />

          <div className="card-body">
            <h5 data-id="title" className="card-title">
              Card title
            </h5>

            <p data-id="description" className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>

            <div className="post-detail">
              <div>
                <p className="price">$199.99</p>
              </div>
              <div>
                <a href="#" className="btn btn-success">
                  See Detail
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-id="menu" className="post-item-menu">
          <div
            data-id="edit"
            className="menu-item rounded-circle"
            role="button"
          >
            <i className="fas fa-pen"></i>
          </div>
          <div
            data-id="remove"
            className="remove-button menu-item rounded-circle"
            role="button"
          >
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
