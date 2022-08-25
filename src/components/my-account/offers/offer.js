import React from "react";

const Offer = (props) => {
  const { offer } = props;
  return (
    <div className="col-md-6">
      <div className="card offer-card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">
            <img src="img/bank/1.png" alt="" className />
            OSAHANEAT50
          </h5>
          <h6 className="card-subtitle mb-2 text-block">
            Get 50% OFF on your first rk-restra eat order
          </h6>
          <p className="card-text">
            Use code OSAHANEAT50 &amp; get 50% off on your first rk-restra order on
            Website and Mobile site. Maximum discount: $200
          </p>
          <button type="button" className="card-btn mr-3 p-0 btn btn-link">
            COPY CODE
          </button>
          <a className="card-link" href="/myaccount/offers">
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
