import React from "react";
import "./Category.css"

const CategoryCard = ({ product }) => {
  return (
    <div className="card-section ">
      <div className="card-div">
        <div className="category-img">
          <img src={product.image} alt={product.name} className="" />
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
          <p>{product.discount} off</p>
        </div>

        {/* <button className="buy-btn">Add to Cart</button> */}
      </div>
    </div>
  );
};

export default CategoryCard