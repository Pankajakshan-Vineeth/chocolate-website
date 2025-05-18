import React from "react";
import "./BestSellers.css";
import best_seller from "../../assets/bestSeller.js";
import Item from "../Item/Item";

const BestSellers = () => {
  return (
    <div className="bestseller-container">
      <h1>Best Sellers</h1>
      <div className="product-grid">
        {best_seller.map((product) => {
          return (
            <Item
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
