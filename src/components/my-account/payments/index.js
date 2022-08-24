import React from "react";
import MyAccount from "../common/MyAccount";
import Payment from "./payment";

const Payments = (props) => {
  return (
    <MyAccount>
      <div className="p-4 bg-white shadow-sm">
        <div className="row">
          <div className="col-md-12">
            <h4 className="font-weight-bold mt-0 mb-3">Payments</h4>
          </div>
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <div className="text-center load-more col-md-12">
            <button type="button" className="btn btn-primary">
              <div className="mr-1 spinner-grow spinner-grow-sm" />
              Loading...
            </button>
          </div>
        </div>
      </div>
    </MyAccount>
  );
};

export default Payments;
