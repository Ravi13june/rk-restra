import React from "react";
import MyAccount from "../common/MyAccount";
import Offer from "./offer";

const Offers = (props) => {
  return (
    <MyAccount>
      <div className="p-4 bg-white shadow-sm">
        <div className="row">
          <div className="col-md-12">
            <h4 className="font-weight-bold mt-0 mb-3">Offers</h4>
          </div>
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
        </div>
      </div>
    </MyAccount>
  );
};

export default Offers;
