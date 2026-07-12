import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "./CategoryArray";
import CategoryCard from "./Categorycard";

const Categorylist = () => {
  const { category } = useParams();

  const filteredProducts = allProducts.filter(
    (item) => item.category === category
  );

  return (
    <section className="category-section mt-20">
      <h2 className="capitalize">{category}</h2>

      <div className="category-grid">
        {filteredProducts.map((item) => (
          <CategoryCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Categorylist;