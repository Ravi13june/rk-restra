const SliderCard = ({ href, img }) => {
  return (
    <div className="owl-item cloned">
      <div className="item">
        <div className="products-box">
          <a href={href}>
            <img src={img} alt="carousel" className="img-fluid rounded" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
