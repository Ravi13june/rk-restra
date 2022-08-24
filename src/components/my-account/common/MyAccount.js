import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../common";
import Sidebar from "./Sidebar";

const MyAccount = (props) => {
  const { children } = props;

  return (
    <Layout>
      <section className="section pt-4 pb-4 clary-account-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="clary-account-page-left shadow-sm bg-white h-100">
                <div className="border-bottom p-4">
                  <div className="clary-user text-center">
                    <div className="clary-user-media">
                      <img
                        src="http://via.placeholder.com/300"
                        alt="gurdeep singh clary"
                        className="mb-3 rounded-pill shadow-sm mt-1"
                      />
                      <div className="clary-user-media-body">
                        <h6 className="mb-2">Ravi</h6>
                        <p className="mb-1">+91 9090909090</p>
                        <p>rkrestra@gmail.com</p>
                        <p className="mb-0 text-black font-weight-bold">
                          <a
                            className="text-primary mr-3"
                            href="/my-account/orders"
                          >
                            <i className="icofont icofont-ui-edit" /> EDIT
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Sidebar />
              </div>
            </div>
            <div className="col-md-9">{children}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyAccount;
