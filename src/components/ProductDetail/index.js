import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

index.propTypes = {};

function index(props) {
  return (
    <div className="card m-5 product-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://source.unsplash.com/y3aP9oo9Pjc/500x500"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="product-detail d-flex align-items-start flex-column">
            <h1 className="display-5 fw-bolder">Shop item template</h1>
            <div className="fs-4 p-2 mb-4">
              {/* <span className="text-decoration-line-through">$45.00</span> */}
              <span>$40.00</span>
            </div>

            <div className="p-2">
              <h5>Descprition:</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>

            <div className="btnGroup mt-auto p-2 d-flex flex-row-reverse">
              {/* <input
              className="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              // style="max-width: 3rem"
            /> */}

              <button className="btn btn-success me-3" type="button">
                Update Product
              </button>
              <button className="btn btn-danger me-3" type="button">
                Delete Product
              </button>

              {/* <a href="#" className="editBtn btn btn-outline-error">
              Delete Product
            </a>

            <a href="#" className="deleteBtn btn btn-primary">
              Update Product
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
