import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import YouMayAlsoLike from "../Components/YouMayAlsoLike/YouMayAlsoLike";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Product = () => {

  const { all_products } = useContext(AppContext);
    const { productId } = useParams();

  const product = all_products.find((e)=>e.id===Number(productId))

  
  return (
    <div>
      <ProductDisplay product = {product}/>
      <YouMayAlsoLike />
    </div>
  );
};

export default Product;
