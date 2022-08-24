import { homePageRestaurantsData } from "../helper";
import RestaurantCard from "./RestaurantCard";

const Restaurants = (props) => {
  return (
    <section className="section pt-5 pb-5 products-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>65 Restaurants Delivering Healthy Foods</h2>
          <span className="line" />
        </div>
        <div className="row">
          {homePageRestaurantsData.map(
            ({ href, img, name, type, ratings, perPerson }) => (
              <RestaurantCard
                href={href}
                img={img}
                name={name}
                type={type}
                ratings={ratings}
                perPerson={perPerson}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
