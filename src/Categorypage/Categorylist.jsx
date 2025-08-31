import React from "react";
import electronics_img from "../assets/Productimgs/electronics.jpeg"
import headphone_img from "../assets/Productimgs/headphones.jpeg"
import mobile_img from "../assets/Productimgs/mobiles.jpeg"
import smartwatch_img from "../assets/Productimgs/smartwatch.jpeg"
import speaker_img from "../assets/Productimgs/speaker.jpeg"
import CategoryCard from "./Categorycard";

// const Products =[...electronics, ...grocery, ...sports, ...furniture, ...homedecor, ...gadgets, ...haircare, ...festival, ...season];

const electronics = [
  { id: 1, title: "Dell LCD", name: "LCD", price: 20000, discount: "upto 5%", image: electronics_img, description: "fwh3ihi3hi3i3hfi3fih3fi hfi3hi3hiu3h3f3f 3hf3ihi3f3hriwb3" },
  { id: 2, title: "Boat Headphone", name: "Headphones", price: 999, discount: "upto 3%", image: headphone_img },
  { id: 3, title: "Poco Mobile", name: "Mobiles", price: 15000, discount: "upto 10%", image: mobile_img },
  { id: 4, title: "Noise Smart Watch", name: "Watches", price: 1499, discount: "upto 8%", image: smartwatch_img },
  { id: 5, title: "Boat Speaker", name: "Speakers", price: 2999, discount: "upto 8%", image: speaker_img },

]

const Categorylist = () => {
  return (
    <section className="category-section mt-20">
      <h2>Top Picks for You</h2>
      <div className="category-div">

        <div className="category-grid">
          {electronics.map((item) => (
            <CategoryCard key={item.id} product={item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Categorylist;
