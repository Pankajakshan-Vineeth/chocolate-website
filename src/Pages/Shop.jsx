import React from "react";
import Hero from "../Components/Hero/Hero";
import PanIndia from "../Components/PanIndia/PanIndia";
import OurProducts from "../Components/OurProducts/OurProducts";
import BestSellers from "../Components/BestSellers/BestSellers";
import Hamper from "../Components/Hamper/Hamper";
import Reviews from "../Components/Reviews/Reviews";

const Shop = () => {
  return (
    <div>
      <Hero />
      <PanIndia />
      <OurProducts />
      <BestSellers />
      <Hamper />
      <Reviews />
    </div>
  );
};

export default Shop;
