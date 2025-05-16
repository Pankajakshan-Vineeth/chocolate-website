import React from "react";
import "./PanIndia.css";
import pan_India from "../../assets/panIndia";
import Item from "../Item/Item";
import forward_icon from "../../assets/back.png";
import backward_icon from "../../assets/front.png";

const PanIndia = () => {
  return (
    <div className="newcollections">
      <h1>Shop PAN India</h1>
      
      <div className="arrow-icons">
        <img src={forward_icon} alt="" />
        <img src={backward_icon} alt="" />
      </div>
      -
      <div className="collections">
        {pan_India.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              images={item.images}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PanIndia;
