import React from "react";
import { Link } from "react-router-dom";
import Layout from "../common";

const CheckoutSuccess = (props) => {
  return (
    <Layout>
      <section className="section pt-5 pb-5 clary-not-found-page">
        <div className="container">
          <div className="row">
            <div className="text-center py-2 col-md-12">
              <img src="/img/thanks.png" alt={404} className="img-fluid" />
              <h1 className="mt-2 mb-2">Congratulations</h1>
              <p className="mb-5">You have successfully placed your order</p>
              <Link className="btn btn-primary btn-lg mr-1" to="/">
                GO HOME
              </Link>
              <Link
                className="btn btn-primary btn-lg ml-1"
                to="/myaccount/orders"
              >
                Check Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutSuccess;
