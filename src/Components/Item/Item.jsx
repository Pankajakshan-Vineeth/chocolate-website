import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const { id, name, price, image: images } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/product/${id}`);
  };

  return (
    <div className="item">
      <div className="item-image-container" onClick={handleClick}>
        {Array.isArray(images) && images[0] && (
          <img className="img-primary" src={images[0]} alt={name} />
        )}
        {Array.isArray(images) && images[1] && (
          <img className="img-secondary" src={images[1]} alt={name} />
        )}
      </div>

      <p>{name}</p>

      <div>
        <div className="item-prices">${price}</div>
      </div>
    </div>
  );
};

export default Item;
