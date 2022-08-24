import React from "react";
import MyAccount from "../common/MyAccount";
import Address from "./address";

const Addresses = (props) => {
  return (
    <MyAccount>
      <div className="p-4 bg-white shadow-sm">
        <div className="row">
          <div className="col-md-12">
            <h4 className="font-weight-bold mt-0 mb-3">Addresses</h4>
          </div>
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
        </div>
      </div>
    </MyAccount>
  );
};

export default Addresses;
