import React from "react";

const Coupon = (props) => {
  const { coupon } = props;
  return (
    <div className="card offer-card shadow-sm mb-4 border-0">
      <div className="card-body">
        <h5 className="card-title">
          <img src="img/bank/1.png" alt="" className />
          {coupon.code}
        </h5>
        <h6 className="card-subtitle mb-2 text-block">{coupon.title}</h6>
        <p className="card-text">{coupon.description}</p>
        <button
          type="button"
          className="btn btn-secondary mr-3 p-1 px-2"
          onClick={() => navigator.clipboard.writeText(coupon.code)}
        >
          COPY CODE
        </button>
        <a className="card-link" href="/offers">
          KNOW MORE
        </a>
      </div>
    </div>
  );
};
export default Coupon;
