import React from "react";
import"./Product.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
      <button className="buy-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
