import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import NotFound from "../components/common/NotFound";
import Checkout from "../components/checkout/Checkout";
import CheckoutSuccess from "../components/checkout/CheckoutSuccess";
import Pages from "../components/pages";
import Orders from "../components/my-account/order";
import MyAccountNotFound from "../components/my-account/MyAccountNotFound";
import TrackOrder from "../components/my-account/order/track";
import Login from "../components/user/Login/Login";
import Signup from "../components/user/Signup/Signup";
import Offers from "../components/my-account/offers";
import OfferPage from "../components/pages/offers/offersPage";
import Cart from "../components/cart";
import LoginRoute from "./helper/LoginRoute";
import PrivateRoute from "./helper/PrivateRoute";
import { useSelector } from "react-redux";
import Favourites from "../components/my-account/favourites";
import Payments from "../components/my-account/payments";
import Addresses from "../components/my-account/addresses";
import Map from "../components/map/index";
import Contact from "../components/Contactus/index";

//import Vendor from "../components/vendor";
import Business from "../components/business";
const Routes = (props) => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    //
  }, [user]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/offers" component={OfferPage} />
        <Route exact path="/cart" component={Cart} />

        <LoginRoute exact path="/login" component={Login} />
        <LoginRoute exact path="/signup" component={Signup} />

        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/success" component={CheckoutSuccess} />
        <Route exact path="/page/:slug" component={Pages} />

        {/*My Account*/}
        <PrivateRoute exact path="/my-account/orders" component={Orders} />
        <PrivateRoute exact path="/my-account/offers" component={Offers} />
        <PrivateRoute
          exact
          path="/my-account/favourites"
          component={Favourites}
        />
        <PrivateRoute exact path="/my-account/payments" component={Payments} />
        <PrivateRoute
          exact
          path="/my-account/addresses"
          component={Addresses}
        />

        <PrivateRoute
          exact
          path="/my-account/order/:orderId/track"
          component={TrackOrder}
        />
        <PrivateRoute path="/my-account/" component={MyAccountNotFound} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/contact" component={Contact} />
       {/* <Route exact path="/vendor" component={Vendor} /> */}
        <Route exact path="/business" component={Business} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
