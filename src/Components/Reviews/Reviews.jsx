import "./Reviews.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";
import rate from "../../assets/rate.png";

const Reviews = () => {

  const slider = useRef(); //accessing ul tag through useref
  const slide = useRef(0); //initializing translate x to 0

  const slideForward = () => {
    if (slide.current > -50) {
      slide.current -= 25;
    }
    slider.current.style.transform = `translateX(${slide.current}%)`;
  };

  const slideBackward = () => {
    if (slide.current < 0) {
      slide.current += 25;
    }
    slider.current.style.transform = `translateX(${slide.current}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <hr />
        <h2 className="title">  What Our Customers Are Saying
</h2>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <img className="rate" src={rate} alt="" />

              <div className="user-info">
                <img className="profilepic" src={user_1} alt="" />
                <div>
                  <h3>Amita Gaur</h3>
                </div>
              </div>
              <p>
                Linoui has some awesome collection of pastry and chocolates...we
                planned back to school celebration for my daughter and we had
                pleasure to try out opera cake and chocolate dragees...Opera
                cake was incredibly soft & moist and Belgian chocolate and
                french buttercream was perfect .And Chocolate dragees was just
                perfect for our small party..
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img className="rate" src={rate} alt="" />

              <div className="user-info">
                <img className="profilepic" src={user_2} alt="" />
                <div>
                  <h3>Kiran Suresh</h3>
                </div>
              </div>
              <p>
                Here's the text from the image: Amita Gaur I ordered Pineapple
                cream Cake and chocolate almond pastrie. It was delicious &
                mouth watering. The sweetness and flavour was well balanced,
                cream used was really premium. Overall it was superb spongy cake
                which made my day. I would like to recommend @linoui to everyone
                for the best quality and good service..
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img className="rate" src={rate} alt="" />

              <div className="user-info">
                <img className="profilepic" src={user_3} alt="" />
                <div>
                  <h3>Pranjali Naik</h3>
                </div>
              </div>
              <p>
                Linoui has some awesome collection of pastry and chocolates...we
                planned back to school celebration for my daughter and we had
                pleasure to try out opera cake and chocolate dragees...Opera
                cake was incredibly soft & moist and Belgian chocolate and
                french buttercream was perfect .And Chocolate dragees was just
                perfect for our small party...
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img className="rate" src={rate} alt="" />

              <div className="user-info">
                <img className="profilepic" src={user_4} alt="" />
                <div>
                  <h3> Ajith Jacob</h3>
                </div>
              </div>
              <p>
                Here's the text from the image: Amita Gaur I ordered Pineapple
                cream Cake and chocolate almond pastrie. It was delicious &
                mouth watering. The sweetness and flavour was well balanced,
                cream used was really premium. Overall it was superb spongy cake
                which made my day. I would like to recommend @linoui to everyone
                for the best quality and good service.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img className="rate" src={rate} alt="" />

              <div className="user-info">
                <img className="profilepic" src={user_4} alt="" />
                <div>
                  <h3> Ajith Jacob</h3>
                </div>
              </div>
              <p>
                Here's the text from the image: Amita Gaur I ordered Pineapple
                cream Cake and chocolate almond pastrie. It was delicious &
                mouth watering. The sweetness and flavour was well balanced,
                cream used was really premium. Overall it was superb spongy cake
                which made my day. I would like to recommend @linoui to everyone
                for the best quality and good service.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img className="rate" src={rate} alt="" />

              <div className="user-info">
                <img className="profilepic" src={user_4} alt="" />
                <div>
                  <h3> Ajith Jacob</h3>
                </div>
              </div>
              <p>
                Here's the text from the image: Amita Gaur I ordered Pineapple
                cream Cake and chocolate almond pastrie. It was delicious &
                mouth watering. The sweetness and flavour was well balanced,
                cream used was really premium. Overall it was superb spongy cake
                which made my day. I would like to recommend @linoui to everyone
                for the best quality and good service.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
