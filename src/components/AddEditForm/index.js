import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

index.propTypes = {};

function index(props) {
  return (
    <div className="card productForm">
      <img
        src="https://source.unsplash.com/y3aP9oo9Pjc/500x500"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <form id="postForm" className="post-form">
          <div className="form-group mb-3">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Eg: Iphone 13 Pro"
            />
            <div className="invalid-feedback">
              Ooops! Please write a nice title for your post &gt;.&lt;
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Price($)</label>
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Eg: 100"
            />
            <div className="invalid-feedback">
              Please enter author of this post!
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="2"
            ></textarea>
          </div>

          <div className="form-group mb-3">
            <button type="button" className="btn btn-primary uploadImage">
              Upload File
            </button>
          </div>

          <div
            className="input-group mb-3"
            data-id="imageSource"
            data-image-source="upload"
          >
            <input
              name="image"
              type="file"
              className="form-control"
              id="uploadImage"
              accept="image/*"
              hidden
            />
            <label className="input-group-text" hidden>
              Upload
            </label>

            <div className="invalid-feedback"></div>
          </div>

          <div className="text-center d-flex justify-content-center">
            <button type="button" className="btn btn-danger me-3">
              Close
            </button>

            <button type="button" className="btn btn-success me-3">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;
