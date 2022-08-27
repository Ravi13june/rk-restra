import Layout from "../common";
function Business() {
  return (
    <Layout>
      <div className="container  bg-light">
        <img alt="business" />
      </div>
      <div className="container  bg-light">
        <div>
          <h3 className="text-center">Get Started with Zomato for Business</h3>
          <h6 className="text-center">
            A free app that allows you to manage your Zomato listing directly
            from your smartphone
          </h6>
        </div>
      </div>
      <div className="container mt-5 bg-light">
        <h3 className="text-center">Get Started with Zomato for Business</h3>
        <div className="row">
          <div className="col-md-4">
            <BusinessCard text="You need to claim your listing before you use the RK-Restra for Business App. Claim Now" />
          </div>
          <div className="col-md-4">
            <BusinessCard text="Download the app and login using the same credentials you used to claim your listing. Send me the link" />
          </div>
          <div className="col-md-4">
            <BusinessCard text="Start managing your restaurant directly from your smartphone" />
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5  bg-light">
        <h3 className="text-center">
          What you can do with the RK-Restra for Business app
        </h3>
        <div className="row">
          <div className="col-md-4">
            <BusinessCard
              title="Answer Reviews"
              text="Get real time notifications of new checkins, photos and reviews, and easily answer reviews"
            />
          </div>
          <div className="col-md-4">
            <BusinessCard
              title="Manage your Online Presence"
              text="Update your listing's information on the go"
            />
          </div>
          <div className="col-md-4">
            <BusinessCard
              title="Analytics"
              text="Feel the pulse of your business: page views, generated revenue, and more"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <BusinessCard
              title="Promos and deals"
              text="Promos are a great way to promote your business to existing and potential customers on Zomato"
            />
          </div>
          <div className="col-md-4">
            <BusinessCard
              title="Special menus"
              text="Serving something new every day? Planning a seasonal menu? Upload your special menu directly from the app"
            />
          </div>
          <div className="col-md-4">
            <BusinessCard
              title="Events"
              text="Promote events that you are hosting in your establishment, from music performances to food festivals you are participating"
            />
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 bg-light">
        <h3 className="text-center">Claim your listing</h3>
      </div>
      <div className="container mt-5 mb-5 bg-light">
        <h3 className="text-center">Cannot find your Restaurant?</h3>
        <p className="text-center">
          Fill the form below to create a listing on RK-Restra
        </p>
        <button className="btn btn-primary text-center">
          Add a Restaurant
        </button>
      </div>

      <div className="row">
        <h3 className="text-center">Want to know more?</h3>
        <p className="text-center">
          Please leave your contact details below, and we’ll be in touch within
          24 hours
        </p>
      </div>
    </Layout>
  );
}

export default Business;


const BusinessCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.chooseImage} alt="business" className="img-fluid" />
        <h4>{props.title}</h4>
        <h6>{props.text}</h6>
      </div>
    </div>
  );
};
