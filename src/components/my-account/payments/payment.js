import React from "react";

const Payment = (props) => {
  const { payment } = props;
  return (
    <div className="col-md-6">
      <div className="bg-white payments-item mb-4 shadow-sm card">
        <div className="gold-members p-4">
          <div className="media">
            <img src="/assets/images/bank/1.png" alt className="mr-3" />
            <div className="media-body">
              <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
              <p>VALID TILL 10/2025</p>
              <p className="mb-0 text-black font-weight-bold">
                <a className="text-danger" href="/my-account/payments">
                  <i className="icofont-ui-delete" /> DELETE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
