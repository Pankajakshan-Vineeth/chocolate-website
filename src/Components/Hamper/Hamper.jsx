import React, { useContext } from "react";
import "./Hamper.css";
import hamper from "../../assets/hamper.js"
import Item from "../Item/Item";



const Hamper = () => {
  
  
  return (
    <div className="bestseller-container">
      <h1>Best Sellers</h1>
      <div className="product-grid">
        {hamper.map((product) => {
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

export default Hamper;
