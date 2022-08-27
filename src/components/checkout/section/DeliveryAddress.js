const Location = (props) => {
  return (
    <div className="col-12 d-flex align-self-center">
      <div className="flex-column text-center pr-2">
        <i className="icofont icofont-2x icofont-location-pin text-danger" />
        <p> 200m</p>
      </div>
      <div className="flex-fill ">
        <div className="align-self-center">
          <h5>Satyam Skyline</h5>
          <p>Naranpura Road, Naranpura, Ahamdabad</p>
        </div>
      </div>
    </div>
  );
};

const DeliveryAddress = (props) => {
  return (
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      <h3 className="mb-1">Choose a delivery address</h3>
      <div>
        <div className="d-flex my-2">
          <i className="icofont icofont-2x icofont-location-arrow text-danger px-2" />
          <h5>Use Current Location</h5>
        </div>
      </div>
      <h4 className="mb-3 text-black-50">Nearby location</h4>
      <div className="row">
        <Location />
        <Location />
        <Location />
      </div>
      <h5 className="mb-3 text-black-50">Recent location</h5>
      <div className="row">
        <Location />
        <Location />
      </div>
      <h5 className="mb-3 text-black-50">Enter Address Details</h5>
      <div className="form-group">
        <textarea
          name="address"
          id="address"
          rows="3"
          placeholder="Complete Address"
          className="form-control"
        />
      </div>
    </div>
  );

  /*return (
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      <h4 className="mb-1">Choose a delivery address</h4>
      <h6 className="mb-3 text-black-50">
        Multiple addresses in this location
      </h6>
      <div className="row">
        <div className="col-md-6">
          <div className="bg-white addresses-item mb-4 undefined card">
            <div className="gold-members p-4">
              <div className="media">
                <div className="mr-3">
                  <i className="icofont icofont-3x icofont-briefcase" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1 text-secondary">Work</h6>
                  <p className="text-black">
                    NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana,
                    Punjab 141002, India
                  </p>
                  <p className="mb-0 text-black font-weight-bold">
                    <a className="btn btn-sm btn-success mr-2" href="/checkout">
                      DELIVER HERE{" "}
                    </a>
                    <span>30MIN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white addresses-item mb-4 undefined card">
            <div className="gold-members p-4">
              <div className="media">
                <div className="mr-3">
                  <i className="icofont icofont-3x icofont-briefcase" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1 text-secondary">Work</h6>
                  <p className="text-black">
                    NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana,
                    Punjab 141002, India
                  </p>
                  <p className="mb-0 text-black font-weight-bold">
                    <a className="btn btn-sm btn-success mr-2" href="/checkout">
                      DELIVER HERE{" "}
                    </a>
                    <span>30MIN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white addresses-item mb-4 undefined card">
            <div className="gold-members p-4">
              <div className="media">
                <div className="mr-3">
                  <i className="icofont icofont-3x icofont-briefcase" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1 text-secondary">Work</h6>
                  <p className="text-black">
                    NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana,
                    Punjab 141002, India
                  </p>
                  <p className="mb-0 text-black font-weight-bold">
                    <a className="btn btn-sm btn-success mr-2" href="/checkout">
                      DELIVER HERE{" "}
                    </a>
                    <span>30MIN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white addresses-item mb-4 undefined card">
            <div className="gold-members p-4">
              <div className="media">
                <div className="mr-3">
                  <i className="icofont icofont-3x icofont-briefcase" />
                </div>
                <div className="media-body">
                  <h6 className="mb-1 text-secondary">Work</h6>
                  <p className="text-black">
                    NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana,
                    Punjab 141002, India
                  </p>
                  <p className="mb-0 text-black font-weight-bold">
                    <a className="btn btn-sm btn-primary mr-2" href="/checkout">
                      ADD NEW ADDRESS
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
};

export default DeliveryAddress;
