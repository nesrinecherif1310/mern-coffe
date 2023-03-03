import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/coffe/${id}`);
      setProduct(result.data);
      console.log(result.data);
    };
    fetchData();
  }, [id]);


  const addToCartHandler = () => {
    dispatch(addProduct({ ...product, quantity }));
}
  return (
    <div className="productDetails">
      <div className="productDetailsDiv">
        <div className="productDetailsBottom">
          <div className="productDetailsBottomLeft">
            <div className="productDetailsBottomImg">
              <img
                src={`../assets/uploads/${product.image}`}
                alt={product.name}
              />
            </div>
          </div>
          <div className="productDetailsBottomRight">
            <div className="productDetailsBottomTexts">
              <div className="productDetailsBottomContent">
                <h4>{product.name}</h4>
              </div>
              <span className="productPrice">TND {product.price}</span>

              <span className="productDesc">{product.description}</span>
              <button onClick={addToCartHandler}>Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
