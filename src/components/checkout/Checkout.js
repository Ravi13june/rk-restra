import React from "react";
import Layout from "../common";
import Recommend from "./section/Recommend";
import DeliveryAddress from "./section/DeliveryAddress";
import PaymentMethod from "./section/PaymentMethod";
import OrderCard from "./section/OrdersCard";

const Checkout = (props) => {
  return (
    <Layout>
      <section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="offer-dedicated-body-left">
                <Recommend />
                <div className="pt-2" />
                <DeliveryAddress />
                <div className="pt-2" />
                <PaymentMethod />
              </div>
            </div>
            <div className="col-md-4">
              <OrderCard />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
