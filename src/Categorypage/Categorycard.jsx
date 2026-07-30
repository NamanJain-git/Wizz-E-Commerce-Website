import React from "react";
import "./Category.css"
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Slice/Slicecart";
import { setBuyNowProduct } from "../Slice/Slicecart";

const CategoryCard = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    dispatch(setBuyNowProduct(product));
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product Added Successfully");
  };

  return (
    <div className="card-section ">
      <div className="card-div">
        <div className="category-img">
          <Link to={`/cart/${product.id}`}>
            <img src={product.image} alt={product.name} className="" />
          </Link>
        </div>

        <div className="card-detail">
          <h3>{product.name}</h3>
          <p className="price">{product.description}</p>
          <p className=""><span>4.5 ⭐ </span> 38,835 ratings & 1930 Reviews</p>

          <ul className="list-disc text-sm font-normal marker:text-gray-500">
            <li>Panel Type: VA Panel</li>
            <li>Screen Resolution Type: Full HD</li>
            <li>Response Time: 5 ms | Refresh Rate: 100 Hz</li>
            <li>3 Year Domestic Warranty</li>

          </ul>
        </div>

        <div className="price-details">
          <h3>₹{product.price}/-</h3>
          <p><span>4.5⭐ </span>38,835 ratings & 1930 Reviews</p>
          <p className="discount">{product.discount} off</p>
          {/* <div className="btns"> */}
          <div className="btns">
            <button onClick={handleAddToCart} className="buy-btn">Add to Cart</button>
            <button onClick={handleBuyNow} className="buy-btn">Buy Now</button>
          </div>
          {/* </div> */}

        </div>

      </div>
    </div>
  );
};

export default CategoryCard