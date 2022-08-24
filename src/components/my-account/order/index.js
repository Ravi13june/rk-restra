import React from "react";
import MyAccount from "../common/MyAccount";
import { Link } from "react-router-dom";

const Orders = (props) => {
  return (
    <MyAccount>
      <div className="p-4 bg-white shadow-sm">
        <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
        <div className="bg-white card mb-4 order-list shadow-sm">
          <div className="gold-members p-4">
            <div className="media">
              <img
                src="http://via.placeholder.com/300"
                alt="img"
                className="mr-4"
              />
              <div className="media-body">
                <span className="float-right text-info">
                  Delivered on Mon, Nov 12, 7:18 PM
                  <i className="text-success ml-1 icofont-check-circled" />
                </span>
                <h6 className="mb-2">
                  <a className="text-black" href="/detail">
                    Gus's World Famous Fried Chicken
                  </a>
                </h6>
                <p className="text-gray mb-1">
                  <i className="icofont icofont-location-arrow" /> 730 S
                  Mendenhall Rd, Memphis, TN 38117, USA
                </p>
                <p className="text-gray mb-3">
                  <i className="icofont icofont-list" /> ORDER #25102589748
                  <i className="ml-2 icofont-clock-time" />
                  Mon, Nov 12, 6:26 PM
                </p>
                <p className="text-dark">
                  Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red
                  Sauce x 1
                </p>
                <hr />
                <div className="float-right">
                  <a
                    className="btn btn-sm btn-outline-primary mr-1"
                    href="/myaccount/orders"
                  >
                    <i className="icofont icofont-headphone-alt" /> HELP
                  </a>
                  <Link
                    className="btn btn-sm btn-outline-primary mr-1"
                    to="/my-account/order/234/track"
                  >
                    <i className="icofont icofont-refresh" /> Track Order
                  </Link>
                  <a className="btn btn-sm btn-primary" href="/detail">
                    <i className="icofont icofont-refresh" /> REORDER
                  </a>
                </div>
                <p className="mb-0 text-black text-primary pt-2">
                  <span className="text-black font-weight-bold">
                    Total Paid:
                  </span>
                  $300
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white card mb-4 order-list shadow-sm">
          <div className="gold-members p-4">
            <div className="media">
              <img
                src="http://via.placeholder.com/300"
                alt="img"
                className="mr-4"
              />
              <div className="media-body">
                <span className="float-right text-info">
                  Delivered on Mon, Nov 12, 7:18 PM
                  <i className="text-success ml-1 icofont-check-circled" />
                </span>
                <h6 className="mb-2">
                  <a className="text-black" href="/detail">
                    Jimmy's Famous American Tavern
                  </a>
                </h6>
                <p className="text-gray mb-1">
                  <i className="icofont icofont-location-arrow" /> 730 S
                  Mendenhall Rd, Memphis, TN 38117, USA
                </p>
                <p className="text-gray mb-3">
                  <i className="icofont icofont-list" /> ORDER #25102589748
                  <i className="ml-2 icofont-clock-time" />
                  Mon, Nov 12, 6:26 PM
                </p>
                <p className="text-dark">
                  Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red
                  Sauce x 1
                </p>
                <hr />
                <div className="float-right">
                  <a
                    className="btn btn-sm btn-outline-primary mr-1"
                    href="/myaccount/orders"
                  >
                    <i className="icofont icofont-headphone-alt" /> HELP
                  </a>
                  <a className="btn btn-sm btn-primary" href="/detail">
                    <i className="icofont icofont-refresh" /> REORDER
                  </a>
                  <a
                    className="btn btn-sm btn-primary"
                    href="/my-account/order/234/track"
                  >
                    <i className="icofont icofont-refresh" /> Track Order
                  </a>
                </div>
                <p className="mb-0 text-black text-primary pt-2">
                  <span className="text-black font-weight-bold">
                    Total Paid:
                  </span>
                  $300
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white card mb-4 order-list shadow-sm">
          <div className="gold-members p-4">
            <div className="media">
              <img src="/img/5.jpg" alt="img" className="mr-4" />
              <div className="media-body">
                <span className="float-right text-info">
                  Delivered on Mon, Nov 12, 7:18 PM
                  <i className="text-success ml-1 icofont-check-circled" />
                </span>
                <h6 className="mb-2">
                  <a className="text-black" href="/detail">
                    The Famous Restaurant
                  </a>
                </h6>
                <p className="text-gray mb-1">
                  <i className="icofont icofont-location-arrow" /> 730 S
                  Mendenhall Rd, Memphis, TN 38117, USA
                </p>
                <p className="text-gray mb-3">
                  <i className="icofont icofont-list" /> ORDER #25102589748
                  <i className="ml-2 icofont-clock-time" />
                  Mon, Nov 12, 6:26 PM
                </p>
                <p className="text-dark">
                  Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red
                  Sauce x 1
                </p>
                <hr />
                <div className="float-right">
                  <a
                    className="btn btn-sm btn-outline-primary mr-1"
                    href="/myaccount/orders"
                  >Varanasi U.P.
                    <i className="icofont icofont-headphone-alt" /> HELP
                  </a>
                  <a className="btn btn-sm btn-primary" href="/detail">
                    <i className="icofont icofont-refresh" /> REORDER
                  </a>
                </div>
                <p className="mb-0 text-black text-primary pt-2">
                  <span className="text-black font-weight-bold">
                    Total Paid:
                  </span>
                  $300
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyAccount>
  );
};

export default Orders;
