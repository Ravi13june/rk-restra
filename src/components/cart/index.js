import Layout from "../common";

function Cart() {
  return (
    <Layout>
      <div className="App">
        <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page py-3">My Cart</h2>
          </div>
        </section>

        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              <main className="col-md-9">
                <div className="card">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" className="text-right" width="200">
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <img
                                src="https://media.istockphoto.com/photos/tasty-butter-chicken-curry-dish-from-indian-cuisine-picture-id1300632831?s=612x612"
                                className="img-fluid"
                                style={{ height: "60", width: "60px" }}
                                alt="cart-item"
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title text-dark">
                                Gus's World Famous Chicken
                              </a>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select className="form-control">
                            <option>Quarter</option>
                            <option>Half</option>
                            <option>Full</option>
                            <option>Family Pack</option>
                          </select>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">156.00</var>
                          </div>
                        </td>
                        <td className="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            href=""
                            className="btn btn-light mr-2"
                            data-toggle="tooltip"
                          >
                            {" "}
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="" className="btn btn-light">
                            {" "}
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <img
                                src="https://media.istockphoto.com/photos/chilli-paneer-indian-snack-food-picture-id1311491582?k=6&m=1311491582&s=612x612&w=0&h=e9PJrF0dOjawXYIHI8QcYfhY1ISRp5wIDXb1Wf2T03U="
                                className="img-sm"
                                style={{ height: "60", width: "60px" }}
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title text-dark">
                                Russian Paneer with extra cheese
                              </a>
                              <p className="text-muted small"></p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select className="form-control">
                            <option>Quarter</option>
                            <option>Half</option>
                            <option>Full</option>
                            <option>Family Pack</option>
                          </select>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">149.97</var>
                          </div>
                        </td>
                        <td className="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            href=""
                            className="btn btn-light mr-2"
                            data-toggle="tooltip"
                          >
                            {" "}
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="" className="btn btn-light btn-round">
                            {" "}
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <img
                                src="https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891__340.jpg"
                                style={{ height: "60", width: "60px" }}
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title text-dark">
                                Green Salad
                              </a>
                              <p className="small text-muted"></p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select className="form-control">
                            <option>Quarter</option>
                            <option>Half</option>
                            <option>Full</option>
                            <option>Family Pack</option>
                          </select>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">98.00</var>
                          </div>
                        </td>
                        <td className="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            href=""
                            className="btn btn-light mr-2"
                            data-toggle="tooltip"
                          >
                            {" "}
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="" className="btn btn-light btn-round">
                            {" "}
                            Remove
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="card-body border-top">
                    <a href="#" className="btn btn-primary float-md-right">
                      {" "}
                      Make Purchase <i className="fa fa-chevron-right"></i>{" "}
                    </a>
                    <a href="#" className="btn btn-light">
                      {" "}
                      <i className="fa fa-chevron-left"></i> Continue shopping{" "}
                    </a>
                  </div>
                </div>

                <div className="alert alert-success mt-3">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck"></i> Free
                    Delivery after 35 mins
                  </p>
                </div>
              </main>
              <aside className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Have coupon?</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name=""
                            placeholder="Coupon code"
                          />
                          <span className="input-group-append">
                            <button className="btn btn-primary">Apply</button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <dl className="dlist-align">
                      <dt>Total price:</dt>
                      <dd className="text-right">Rs. 568</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Discount:</dt>
                      <dd className="text-right">Rs. 658</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Total:</dt>
                      <dd className="text-right  h5">
                        <strong>1,650</strong>
                      </dd>
                    </dl>
                    <hr />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-name bg padding-y">
          <div className="container">
            <h6>Payment and refund policy</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Cart;
