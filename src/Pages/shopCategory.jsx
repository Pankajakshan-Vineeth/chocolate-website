import React, { useContext } from "react";
import "./CSS/shopCategory.css";
import arrow from "../assets/breadcrum_arrow.png";
import dropdown from "../assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom"; //

const ShopCategory = ({ category }) => {
  const { all_products } = useContext(AppContext);

  return (
    <div className="shop-category">
       

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of {all_products.length} products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_products
          .filter((item) => item.category === category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              category={item.category}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
      <p className="total-items">Items 1 to 9 of {all_products.length} total</p>
    </div>
  );
};

export default ShopCategory;
