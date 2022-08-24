const RestaurantCard = ({ href, img, name, type, ratings, perPerson }) => {
  return (
    <div className="col-6 col-md-4 p-2">
      <div className="owl-item cloned">
        <div className="item">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              {/*<div className="star position-absolute">
              <span className="badge badge-success">
                <i className="icofont icofont-star" /> 3.1 (300+)
              </span>
            </div>*/}
              <div className="favourite-heart position-absolute text-dark">
                <a href={href}>
                  <i className="icofont icofont-heart" />
                </a>
              </div>
              <div className="member-plan position-absolute">
                <span className="badge badge-danger">Promoted</span>
              </div>
              <a href={href}>
                <img src={img} alt="Product" className="img-fluid item-img" />
              </a>
            </div>
            <div className="p-3 pb-0 position-relative">
              <div className="list-card-body d-flex">
                <div className="flex-fill">
                  <h6 className="mb-1">
                    <a className="text-black" href="/detail">
                      {name}
                    </a>
                  </h6>
                  <p className="text-gray mb-3">{type}</p>
                </div>
                <div className="flex-column text-right">
                  <div className="star">
                    <span className="badge badge-success">
                      <i className="icofont icofont-star" /> {ratings}
                    </span>
                  </div>
                  <p className="text-gray mb-3 mt-1 time">
                    <span className="float-right text-black-50">
                      {perPerson}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
