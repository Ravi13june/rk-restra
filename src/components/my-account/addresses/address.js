import React from "react";

const Address = (props) => {
  const { address } = props;
  return (
    <div className="col-md-6">
      <div className="bg-white addresses-item mb-4 border border-primary shadow card">
        <div className="gold-members p-4">
          <div className="media">
            <div className="mr-3">
              <i className="icofont-3x icofont-ui-home" />
            </div>
            <div className="media-body">
              <h6 className="mb-1 text-secondary">Home</h6>
              <p className="text-black">
                Ahmedabad, Jawaddi Kalan, Ludhiana, Punjab 141002, India
              </p>
              <p className="mb-0 text-black font-weight-bold">
                <a className="text-primary mr-3" href="/my-account/addresses">
                  <i className="icofont-ui-edit" /> EDIT
                </a>
                <a className="text-danger" href="/myaccount/addresses">
                  <i className="icofont-ui-delete" /> DELETE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
