import React, { useContext } from "react";
import "./PanIndia.css";
import { AppContext } from "../../Context/AppContext";
import Item from "../Item/Item";
import prevIcon from "../../assets/back.png";
import nextIcon from "../../assets/front.png";

export default function PanIndia() {
  const {
    visiblePanIndia,
    page,
    pageCount,
    prevPanIndia,
    nextPanIndia,
    goToPanIndiaPage,
  } = useContext(AppContext);

  return (
    <div className="panindia">
      <div className="panindia-header">
        <h1>Shop PAN India</h1>
        <div className="arrows">
          <img src={prevIcon} onClick={prevPanIndia} alt="Prev" />
          <img src={nextIcon} onClick={nextPanIndia} alt="Next" />
        </div>
      </div>

      <div className="grid">
        {visiblePanIndia.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            images={item.images}
            price={item.price}
          />
        ))}
      </div>

      <div className="dots">
        {Array.from({ length: pageCount }).map((_, i) => (
          <span
            key={i}
            className={i === page ? "dot active" : "dot"}
            onClick={() => goToPanIndiaPage(i)}
          />
        ))}
      </div>
    </div>
  );
}
