import { Link } from "react-router-dom";

const OrderCard = (props) => {
  return (
    <div
      className="generator-bg rounded shadow-sm mb-4 p-4 rk-restra-cart-item sticky-top"
      style={{ "z-index": 0 }}
    >
      <div className="d-flex mb-4 rk-restra-cart-item-profile">
        <div className="d-flex flex-column">
          <h6 className="mb-1 text-white">Your Order</h6>
          <p className="mb-0 text-white">
            <i className="icofont icofont-location-pin" />0 Items
          </p>
        </div>
      </div>
      <div className="bg-white rounded shadow-sm mb-2">
        <div className="gold-members p-2 border-bottom">
          <p className="text-gray mb-0 float-right ml-2">$628</p>
          <span className="count-number float-right">
            <button
              type="button"
              className="btn-sm left dec btn btn-outline-secondary"
            >
              <i className="icofont icofont-minus" />
            </button>
            <input
              className="count-number-input"
              type="text"
              readOnly
              defaultValue={2}
            />
            <button
              type="button"
              className="btn-sm right inc btn btn-outline-secondary"
            >
              <i className="icofont icofont-plus" />
            </button>
          </span>
          <div className="media">
            <div className="mr-2">
              <i className="text-danger food-item icofont-ui-press" />
            </div>
            <div className="media-body">
              <p className="mt-1 mb-0 text-black">Chicken Tikka Sub</p>
            </div>
          </div>
        </div>
        <div className="gold-members p-2 border-bottom">
          <p className="text-gray mb-0 float-right ml-2">$260</p>
          <span className="count-number float-right">
            <button
              type="button"
              className="btn-sm left dec btn btn-outline-secondary"
            >
              <i className="icofont icofont-minus" />
            </button>
            <input
              className="count-number-input"
              type="text"
              readOnly
              defaultValue={1}
            />
            <button
              type="button"
              className="btn-sm right inc btn btn-outline-secondary"
            >
              <i className="icofont icofont-plus" />
            </button>
          </span>
          <div className="media">
            <div className="mr-2">
              <i className="text-danger food-item icofont-ui-press" />
            </div>
            <div className="media-body">
              <p className="mt-1 mb-0 text-black">Cheese corn Roll</p>
            </div>
          </div>
        </div>
        <div className="gold-members p-2 border-bottom">
          <p className="text-gray mb-0 float-right ml-2">$122</p>
          <span className="count-number float-right">
            <button
              type="button"
              className="btn-sm left dec btn btn-outline-secondary"
            >
              <i className="icofont icofont-minus" />
            </button>
            <input
              className="count-number-input"
              type="text"
              readOnly
              defaultValue={1}
            />
            <button
              type="button"
              className="btn-sm right inc btn btn-outline-secondary"
            >
              <i className="icofont icofont-plus" />
            </button>
          </span>
          <div className="media">
            <div className="mr-2">
              <i className="text-danger food-item icofont-ui-press" />
            </div>
            <div className="media-body">
              <p className="mt-1 mb-0 text-black">Mixed Veg</p>
            </div>
          </div>
        </div>
        <div className="gold-members p-2 border-bottom">
          <p className="text-gray mb-0 float-right ml-2">$652</p>
          <span className="count-number float-right">
            <button
              type="button"
              className="btn-sm left dec btn btn-outline-secondary"
            >
              <i className="icofont icofont-minus" />
            </button>
            <input
              className="count-number-input"
              type="text"
              readOnly
              defaultValue={1}
            />
            <button
              type="button"
              className="btn-sm right inc btn btn-outline-secondary"
            >
              <i className="icofont icofont-plus" />
            </button>
          </span>
          <div className="media">
            <div className="mr-2">
              <i className="text-danger food-item icofont-ui-press" />
            </div>
            <div className="media-body">
              <p className="mt-1 mb-0 text-black">Black Dal Makhani</p>
            </div>
          </div>
        </div>
        <div className="gold-members p-2 border-bottom">
          <p className="text-gray mb-0 float-right ml-2">$122</p>
          <span className="count-number float-right">
            <button
              type="button"
              className="btn-sm left dec btn btn-outline-secondary"
            >
              <i className="icofont icofont-minus" />
            </button>
            <input
              className="count-number-input"
              type="text"
              readOnly
              defaultValue={1}
            />
            <button
              type="button"
              className="btn-sm right inc btn btn-outline-secondary"
            >
              <i className="icofont icofont-plus" />
            </button>
          </span>
          <div className="media">
            <div className="mr-2">
              <i className="text-danger food-item icofont-ui-press" />
            </div>
            <div className="media-body">
              <p className="mt-1 mb-0 text-black">Mixed Veg</p>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="mb-2 bg-white rounded p-2 clearfix">
        <div className="input-group-sm mb-2 input-group">
          <input
            placeholder="Enter promo code"
            type="text"
            className="form-control"
          />
          <div className="input-group-append">
            <button
              id="button-addon2"
              type="button"
              className="btn btn-primary"
            >
              <i className="icofont icofont-sale-discount" /> APPLY
            </button>
          </div>
        </div>
        <div className="mb-0 input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="icofont icofont-comment" />
            </span>
          </div>
          <textarea
            placeholder="Any suggestions? We will pass it on..."
            aria-label="With textarea"
            className="form-control"
            defaultValue={""}
          />
        </div>
      </div>*/}
      <div className="mb-2 bg-white rounded p-2 clearfix">
        <p className="mb-1">
          Item Total <span className="float-right text-dark">$3140</span>
        </p>
        <p className="mb-1">
          Restaurant Charges
          <span className="float-right text-dark">$62.8</span>
        </p>
        <p className="mb-1">
          Delivery Fee
          <span className="text-info ml-1">
            <i className="icofont icofont-info-circle" />
          </span>
          <span className="float-right text-dark">$10</span>
        </p>
        <p className="mb-1 text-success">
          Total Discount
          <span className="float-right text-success">$1884</span>
        </p>
        <hr />
        <h6 className="font-weight-bold mb-0">
          TO PAY <span className="float-right">$1329</span>
        </h6>
      </div>
      <Link className="btn btn-success btn-block btn-lg" to="/checkout/success">
        PAY $1329
        <i className="icofont icofont-long-arrow-right" />
      </Link>
    </div>
  );
};

export default OrderCard;
