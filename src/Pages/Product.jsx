import React from "react";
import BreadCrums from "../Components/BreadCrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import YouMayAlsoLike from "../Components/YouMayAlsoLike/YouMayAlsoLike";

const Product = () => {
  return (
    <div>
      <BreadCrums />
      <ProductDisplay />
      <YouMayAlsoLike />
    </div>
  );
};

export default Product;
