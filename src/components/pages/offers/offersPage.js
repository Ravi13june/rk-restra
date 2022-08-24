import Layout from "../../common";
import Coupon from "./Coupon";
import { allCoupons, bankOfffers } from "../helper";
import BankOffersCard from "./BankOffersCard";

const OfferPage = () => {
  //const coupons = useSelector((state) => state.coupon.data);

  return (
    <Layout>
      <>
        <section className="breadcrumb-clary pt-5 pb-5 bg-dark position-relative text-center">
          <h1 className="text-white">Offers for you</h1>
          <h6 className="text-white-50">
            Explore top deals and offers exclusively for you!
          </h6>
        </section>
        <section className="section pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="font-weight-bold mt-0 mb-3">
                  Available Coupons
                </h4>
              </div>
              {allCoupons?.map((coupon, couponIdx) => {
                return (
                  <div className="col-md-4" key={`coupon-${couponIdx}`}>
                    <Coupon coupon={coupon} />
                  </div>
                );
              })}
            </div>
            <div className="pt-5 row">
              <div className="col-12">
                <h4 className="font-weight-bold mt-0 mb-3">Bank Offers</h4>
              </div>
              {bankOfffers.map((bankOffer, index) => (
                <div className="col-md-6" key={`bank-offer-${index}`}>
                  <BankOffersCard bankOffer={bankOffer} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};
export default OfferPage;
