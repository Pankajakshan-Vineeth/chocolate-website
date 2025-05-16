import React, { useContext } from "react";
import "./Hero.css";
import { AppContext } from "../../Context/AppContext";
import backward from "../../assets/backward.png";
import forward from "../../assets/fast-forward-button.png";
import macaron from "../../assets/macarons.jpg";
import almond from "../../assets/almond.jpg";
import cake from "../../assets/cake.jpg";
import crossiants from "../../assets/crossiants.jpg";

const Hero = () => {
  const { count, setCount, heroData } = useContext(AppContext);

  // Guard in case heroData or heroData[count] is undefined

  if (!heroData || !heroData[count]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero">
      <div className="background-images">
        <img src={macaron} alt="" className={count === 0 ? "active" : ""} />
        <img src={almond} alt="" className={count === 1 ? "active" : ""} />
        <img src={cake} alt="" className={count === 2 ? "active" : ""} />
        <img src={crossiants} alt="" className={count === 3 ? "active" : ""} />
      </div>

      <div className="hero-text">
        <p>{heroData[count].text1}</p>
        <p>{heroData[count].text2}</p>
        {heroData[count].text3 && <p>{heroData[count].text3}</p>}
      </div>

      <div className="arrowbuttons">
        <img
          src={backward}
          alt="Previous"
          onClick={() =>
            setCount(count === 0 ? heroData.length - 1 : count - 1)
          }
        />
        <img
          src={forward}
          alt="Next"
          onClick={() =>
            setCount(count === heroData.length - 1 ? 0 : count + 1)
          }
        />
      </div>

      <div className="hero-dot-play">
        <div className="hero-dots">
          {[0, 1, 2, 3].map((index) => (
            <li
              key={index}
              onClick={() => setCount(index)}
              className={count === index ? "hero-dot orange" : "hero-dot"}
            ></li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
