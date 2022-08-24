import React from "react";

const BankOffersCard = (props) => {
  const { bankOffer } = props;
  return (
    <div className="offer-card-horizontal border-0 shadow-sm card">
      <div className="d-flex align-items-center no-gutters row">
        <div className="p-4 col-md-4 col-4">
          <img src={bankOffer.bankImage} alt="" className="card-img" />
        </div>
        <div className="col-md-8 col-8">
          <div className="card-body">
            <h5 className="card-title">{bankOffer.title}</h5>
            <p className="card-text">{bankOffer.description}</p>
            <p className="card-text">
              <small className="text-info">Other T&amp;Cs may apply</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankOffersCard;
