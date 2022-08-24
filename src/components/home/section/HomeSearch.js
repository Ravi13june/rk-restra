import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CategorySlider } from "./CategorySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSearch = (props) => {
  const categories = useSelector((state) => state.home.data.categories);
  console.log("categories", categories);
  useEffect(() => {
    //
  }, [categories]);

  return (
    <section className="pt-5 pb-5 homepage-search-block position-relative">
      <div className="banner-overlay" />
      <div className="container">
        <div className="d-flex align-items-center row">
          <div className="col-md-8">
            <div className="homepage-search-title">
              <h1 className="mb-5 text-center text-md-left  font-weight-normal">
                <span className="font-weight-bold">
                  Set Your Location to start exploring restaurants & Stores
                  around you
                </span>
              </h1>
            </div>
            <div className="homepage-search-form">
              <form className="form-noborder">
                <div className="form-row">
                  <div className="col-lg-10 col-md-10 col-sm-12 form-group">
                    <input
                      placeholder="Enter your delivery location"
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <a className="locate-me" href="/">
                      <i className="icofont icofont-ui-pointer" /> Locate Me
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                    <a
                      className="btn btn-primary btn-block btn-lg btn-gradient"
                      href="/listing"
                    >
                      Search
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <h6 className="mt-4 text-shadow font-weight-normal">
              E.g. Beverages, Pizzas, Chinese, Bakery, Indian...
            </h6>
          </div>
          <div className="col-md-4">
            <CategorySlider />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSearch;
