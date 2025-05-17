import React, { useState } from "react";
import "./OurProducts.css";
import Item from "../../Components/Item/Item";  
import ourProducts from "../../assets/ourProducts";

const categories = [
  "cakes",
  "chocolates",
  "pastries",
  "macarons",
  "cookies",
  "traditional plum cake",
];

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]); // default to "cakes"

  return (
    <div className="ourproduct-container">
      <nav className="nav-container">
        <h1>Our Products</h1>

        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              style={{ cursor: "pointer" }}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      <div className="product-grid">
        {ourProducts[activeCategory]?.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        )) || <p>No products found in this category.</p>}
      </div>
    </div>
  );
};

export default OurProducts;
