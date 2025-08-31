import React from "react";
// import ProductArray from "./ProductArray";
import { electronics, grocery, sports, furniture, homedecor, toys, haircare, festival, season } from "./ProductArray";
import ProductCard from "./ProductCard";

// const Products =[...electronics, ...grocery, ...sports, ...furniture, ...homedecor, ...gadgets, ...haircare, ...festival, ...season];

const ProductList = () => {
  return (
    <section className="product-section">
      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {electronics.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {grocery.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {sports.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {furniture.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {homedecor.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {toys.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {haircare.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {festival.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
      <div className="product-div">
        <h2>Top Picks for You</h2>
        <div className="product-grid">
          {season.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductList;
