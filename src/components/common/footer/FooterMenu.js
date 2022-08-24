import { useState } from "react";
import { Link } from "react-router-dom";
import GooglePlayIcon from "../../../assets/images/google-play.png";

const FooterMenu = (props) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
  };
  return (
    <section className="footer pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h6 className="mb-3">Subscribe to our Newsletter</h6>
            <form onSubmit={handleSubmit} className="newsletter-form mb-1">
              <div className="mb-3 input-group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please enter your email"
                  type="email"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <p>
              <a className="text-info" href="/register">
                Register now
              </a>{" "}
              to get updates on <a href="/offers">Offers and Coupons</a>
            </p>
            <div className="app">
              <p className="mb-2">DOWNLOAD APP</p>
              <a href="/">
                <img
                  src={GooglePlayIcon}
                  alt="play store icon"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="mobile-none col-md-1 col-sm-6" />
          <div className="col-md-2 col-sm-4 col-6">
            <h6 className="mb-3">About RK-RESTRA</h6>
            <ul>
              <li>
                <Link to="/page/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/page/culture">Culture</Link>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <Link to="/page/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/map">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-4 col-6">
            <h6 className="mb-3">For Foodies</h6>
            <ul>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Blogger Help</a>
              </li>
              <li>
                <a href="/">Verified Users</a>
              </li>
              <li>
                <a href="/">Code of Conduct</a>
              </li>
            </ul>
          </div>
          <div className="m-none col-md-2 col-sm-4 col-4">
            <h6 className="mb-3">For Restaurants</h6>
            <ul>
              <li>
                <a href="/">Advertise</a>
              </li>
              <li>
                <a href="/">Add a Restaurant</a>
              </li>
              <li>
                <a href="/">Claim your uling</a>
              </li>
              <li>
                <a href="/">For Businesses</a>
              </li>
              <li>
                <a href="/">Owner Guidelines</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMenu;
