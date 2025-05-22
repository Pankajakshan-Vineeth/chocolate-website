import "./ProductDisplay.css";
import arrow from '../../assets/breadcrum_arrow.png'

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <p className="">
          Home <img className="arrow" src={arrow} alt="" />
          {props.category}
        </p>

        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>

        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-price">Rs. {product.price}.00</div>
        <p className="size">Size:Box of 8</p>
        <div className="productdisplay-boxes">
          <span className="circle">Box of 8</span>
          <span className="circle"> Box of 12</span>
          <span className="circle"> Box of 24</span>
        </div>
        <div className="product-display-pincode">
          <p>Delivery Options</p>
          <span>
            <input type="text" placeholder="Enter your Pincode" />
            <button className="check">Check</button>
          </span>
          <br />
          <button className="addtocart">ADD TO CART</button>
        </div>

        <div className="productdisplay--description">
          <p>DESCRIPTION</p>
          Linoui’s Truffles and Pralines are a homage to that rare Belgian
          experience, made with fine couverture chocolates. Our Truffles and
          pralines have a soft, smooth and chocolatey centre , engulfed in
          enchanting flavours that you can choose from. Truffle flavours:
          Raspberry, Coffee, Orange or Dark Chocolate Praline flavours: Coffee,
          Hazelnut, Orange Zest, Rum & Raisin, Dark orange or Classic Chocolate.
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
