import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

const currentTabClass = (history, path) => {
  if (history.location.pathname === path) {
    return "nav-link active";
  } else {
    return "nav-link";
  }
};

const Sidebar = (history) => {
  let history2 = useHistory();

  function navLink(slug, name, icon) {
    return (
      <li className="nav-item">
        <Link className={currentTabClass(history, slug)} to={slug}>
          {icon} {name}
        </Link>
      </li>
    );
  }

  return (
    <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
      {navLink(
        "/my-account/orders",
        "Orders",
        <i className="icofont icofont-food-cart" />
      )}
      {navLink(
        "/my-account/offers",
        "Offers",
        <i className="icofont icofont-sale-discount" />
      )}

      {navLink(
        "/my-account/favourites",
        "Favourites",
        <i className="icofont icofont-heart" />
      )}
      {navLink(
        "/my-account/payments",
        "Payments",
        <i className="icofont icofont-credit-card" />
      )}
      {navLink(
        "/my-account/addresses",
        "Addresses",
        <i className="icofont icofont-location-pin" />
      )}
    </ul>
  );
};

export default withRouter(Sidebar);
