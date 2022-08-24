import React from "react";
import Layout from "../../common";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Faq from "react-faq-component";

//data for FAQ section
const styles = {
  // bgColor: 'white',
  titleTextColor: "red",
  // titleTextSize: '48px',
  rowTitleColor: "black",

  //rowTitleTextSize: 'medium',
  // rowContentColor: 'grey',
  rowContentTextSize: "16px",
  // rowContentPaddingTop: '10px',

  // rowContentPaddingRight: '150px',
  arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const data = {
  title: "Frequently asked questions",
  rows: [
    {
      title: "What will Clary charge me for creating a page on its platform?",
      content:
        "Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.",
    },
    {
      title:
        "What all documents are required for registering on online ordering?",
      content: "Registration for online ordering requires",
    },
    {
      title:
        "I have a large fleet of delivery boys, why should I use Clary’s delivery service?",
      content:
        "You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.",
    },
    {
      title:
        "What happens if the average order value of Clary orders is very low",
      content:
        "Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.",
    },
  ],
};

function Vendor() {
  //our products brackpoint for carousel

  const brackpoint = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 768,
      itemsToShow: 3,
    },
    {
      width: 1200,
      itemsToShow: 4,
    },
    {
      width: 1500,
      itemsToShow: 5,
    },
  ];
  const partnerBrackpoint = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 768,
      itemsToShow: 1,
    },
    {
      width: 1200,
      itemsToShow: 1,
    },
    {
      width: 1500,
      itemsToShow: 1,
    },
  ];

  return (
    <Layout>
      <div className="bg-dark">
        <div className="container">
          <div className="row ml-5">
            <div className="mt-5 mx-3">
              <h1 className="text-white">Partner with clary</h1>
              <p className="text-white">for free and and more customers!</p>
            </div>
          </div>
          <div className="row mx-5">
            <div className="col-md-6 mb-5">
              <button className="btn btn-block btn-primary">
                Register your restaurant
              </button>
            </div>
            <div className="col-md-6 mb-5">
              <button className="btn btn-block btn-secondary">
                Restaurant already listed? Claim know
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="container">
          <div>
            <h1 className="text-center">Why should you partner with Clary?</h1>
            <p className="text-center">
              Clary enables you to get 60% more revenue, 10x new customers and
              boost your brand visibility by provinding insights to improve your
              business.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow">
                  <img src="" alt="" />
                  <h5>500+ cities</h5>
                  <p>in India</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body  shadow">
                  <img src="" alt="" />
                  <h5>2.5 lakhs+</h5>
                  <p>restaurant listings</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow">
                  <img src="" alt="" />
                  <h5>4 crore+</h5>
                  <p>monthly orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center">How it works?</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid rounded"
                  src="https://media.istockphoto.com/vectors/clipboard-with-checklist-vector-id913685766?k=6&m=913685766&s=612x612&w=0&h=xX7loea5wgcXa1BfznMNaXpANSQcCAq71qEUelSm1Ek="
                />
                <h3 className="text-center">Step 1</h3>
                <h6 className="text-center">Create your page at Clary</h6>
                <p className="text-center">
                  Help users discover your place by creating on Clary
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid rounded"
                  src="https://media.istockphoto.com/vectors/thin-line-icon-on-shiny-button-transportation-vector-id902317492?s=612x612"
                  alt="scooter"
                />
                <h3 className="text-center">Step 2</h3>
                <h6 className="text-center">Register for online ordering</h6>
                <p className="text-center">
                  And deliver orders to millions of customers with ease
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid rounded"
                  src="https://media.istockphoto.com/vectors/abstract-circle-shopping-bag-logo-designs-concept-vector-sale-logo-vector-id1227438047?k=6&m=1227438047&s=612x612&w=0&h=-isLuZhdVt1KFQSoH1gCsD7KVfGBw-W0h9Xkip---Uk="
                  alt="bag"
                />
                <h3 className="text-center">Step 3</h3>
                <h6 className="text-center">Start receiving online orders</h6>
                <p className="text-center">
                  Manage orders on your partner app, web dashboard or API
                  partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center">Already have your restaurant listed?</h1>
        <h5 className="text-center">
          Search here and claim the ownership of your restaurant
        </h5>
        <div className="row">
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              placeholder="Search for your restaurant, eg.Goliieya Cafe"
            />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center">Our products</h1>
        <div className="row">
          <Carousel breakPoints={brackpoint}>
            <Cards
              chooseIcon="https://media.istockphoto.com/photos/warehouse-manager-with-digital-tablet-picture-id1079548876?k=6&m=1079548876&s=612x612&w=0&h=sHOips8iOt6a6RjSZLZJX11mMRbA2zCP-h-AxFlU2C0="
              alt="listing-icon"
              title="Listings"
              subtitle="A free app that allows you to manage your Clary listing directly from your smartphone"
            />
            <Cards
              chooseIcon="https://cdn.pixabay.com/photo/2018/09/11/17/38/delivery-3670118__340.jpg"
              alt="online ordering"
              title="Online Ordering"
              subtitle="Start taking orders online from millions of users near you and deliver with Clary..."
            />
            <Cards
              chooseIcon="https://media.istockphoto.com/photos/trendy-modern-bar-picture-id182177971?k=6&m=182177971&s=612x612&w=0&h=YOgnKbcn_CWNAdvYxH0O-VjDb-qWsGKpjrgzzBBCqZk="
              alt="pro-icon"
              title="Pro"
              subtitle="Drive more users to dine-in at your place by partnering with Zomato’s loyalty program"
            />
            <Cards
              chooseIcon="https://media.istockphoto.com/photos/image-of-chalkboard-for-beach-drinking-establishment-happy-hour-picture-id1223943834?k=6&m=1223943834&s=612x612&w=0&h=j--qSZ_WOSdMFUTBDNYEYvgeYU9Nq9zc5AY3DPSa88o="
              alt="icon-adveritse"
              title="Advertise"
              subtitle="For every marketing dollar spent, Zomato returns over 8x the investment..."
            />
            <Cards
              chooseIcon="https://media.istockphoto.com/photos/noon-picture-id172625862?k=6&m=172625862&s=612x612&w=0&h=cWIBF6p0-1X67mGVG49yXLhlIFuAb2LFve1U9jo-lew="
              alt="resevations-table-icon"
              title="Table Reservations"
              subtitle="Powerful tool that puts you in control of your table management and reservations..."
            />
            <Cards
              chooseIcon="https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id1177485677?k=6&m=1177485677&s=612x612&w=0&h=aWmZyF9FMTMcAaou_cfWDVveXVfFdBEgKgXEDfH44Y0="
              alt="event-icon"
              title="Events"
              subtitle="Partner with us for India’s grandest food & entertainment carnival - “Zomaland”..."
            />
            <Cards
              chooseIcon="https://media.istockphoto.com/photos/waiter-wearing-ppe-during-covid19-pandemic-serving-food-to-diners-picture-id1264166886?k=6&m=1264166886&s=612x612&w=0&h=EAwkNkX2uJaoP8UcZdfxE0jWdd-l2HOBrowvAtUSRR0="
              alt="food-work"
              title="Food@Work"
              subtitle="Redefines the cafe ordering experience by making it completely digital, cashless..."
            />
            <Cards
              chooseIcon="https://cdn.pixabay.com/photo/2018/03/28/20/32/food-3270461__340.jpg"
              alt="Hyperpure-icon"
              title="Hyperpure"
              subtitle="Supplies fresh and high quality ingredients to restaurant for serving delicious meals..."
            />
            <Cards
              chooseIcon="https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351__340.jpg"
              alt="kitchen-icon"
              title="Kitchens"
              subtitle="Entrepreneurs to own and operate cloud kitchens with minimal investments..."
            />
          </Carousel>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center">Our happy partners</h1>
        <div className="row">
          <Carousel breakPoints={partnerBrackpoint}>
            <PartnerCards
              msg="We are immensely satisfied with the marketing push Clary has provided us. We are now exclusive with Clary and look forward to more growth in our delivery business through online orders."
              name="Ravi Kishan"
              resName="Owner - Chicago BR, Varanasi"
            />
            <PartnerCards
              msg="Clary delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Clary."
              name="Ravi Kishan"
              resName="Owner - Chicago BR, Varanasi"
            />
            <PartnerCards
              msg="We are immensely satisfied with the marketing push Clary has provided us. We are now exclusive with Clary and look forward to more growth in our delivery business through online orders."
              name="Ravi Kishan"
              resName="Owner - Chicago BR, Varanasi"
            />
          </Carousel>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center">What do you get on sign-up</h2>
        <p className="text-center">
          Clary Partner Platform helps you take your business to new heights
          instantly with no hassle and 100% transparency!
        </p>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <Faq styles={styles} data={data} />
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center">
              Cannot find your favourite restaurant on Clary?
            </h1>
            <h6 className="text-center">
              Submit the details and our team will get the restaurant onboard
            </h6>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" placeholder="Restaurant name*" />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Restaurant location*"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Restaurant contact number*"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="What do you like about the restaurant?"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-block btn-primary">Submit</button>
            </div>
            <p>
              Restaurant owners can <a href="#">add restaurant from here</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Vendor;

///our products cards

const Cards = (props) => {
  return (
    <div className="card rounded m-2">
      <div className="card-body p-0">
        <img className="img-fluid " src={props.chooseIcon} alt={props.alt} />
        <div className="p-3">
          <h4>{props.title}</h4>
          <p>{props.subtitle}</p>
          <a className="fw-bold">Learn more</a>
        </div>
      </div>
    </div>
  );
};

//our happy partner

const PartnerCards = (props) => {
  return (
    <div className="card ml-5 mr-5">
      <div className="card-body ml-5 mr-5">
        {/*<img className="img-fluid" src="https://cdn.pixabay.com/photo/2020/08/09/10/57/man-5475187_960_720.jpg"  />*/}
        <p className="">{props.msg}</p>
        <h3>{props.name}</h3>
        <h6>{props.resName}</h6>
      </div>
    </div>
  );
};
