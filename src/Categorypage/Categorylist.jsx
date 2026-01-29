import React from "react";
import lcd1 from "../assets/Categoryimg/lcd1.jpeg";
import lcd2 from "../assets/Categoryimg/lcd2.jpeg";
import lcd3 from "../assets/Categoryimg/lcd3.jpeg";
import lcd4 from "../assets/Categoryimg/lcd4.jpeg";
import lcd5 from "../assets/Categoryimg/lcd5.jpeg";
import hphone1 from "../assets/Categoryimg/hphone1.jpeg";
import hphone2 from "../assets/Categoryimg/hphone2.jpeg";
import hphone3 from "../assets/Categoryimg/hphone3.jpeg";
import hphone4 from "../assets/Categoryimg/hphone4.jpeg";
import hphone5 from "../assets/Categoryimg/hphone5.jpeg";
import phone1 from "../assets/Categoryimg/phone1.jpeg";
import phone2 from "../assets/Categoryimg/phone2.jpeg";
import phone3 from "../assets/Categoryimg/phone3.jpeg";
import phone4 from "../assets/Categoryimg/phone4.jpeg";
import phone5 from "../assets/Categoryimg/phone5.jpeg";
import smwatch1 from "../assets/Categoryimg/smwatch1.webp";
import smwatch2 from "../assets/Categoryimg/smwatch2.webp";
import smwatch3 from "../assets/Categoryimg/smwatch3.jpeg";
import smwatch4 from "../assets/Categoryimg/smwatch4.jpeg";
import smwatch5 from "../assets/Categoryimg/smwatch5.png";
import speaker1 from "../assets/Categoryimg/speaker1.png";
import speaker2 from "../assets/Categoryimg/speaker2.jpeg";
import speaker3 from "../assets/Categoryimg/speaker3.png";
import speaker4 from "../assets/Categoryimg/speaker4.jpeg";
import speaker5 from "../assets/Categoryimg/speaker5.jpeg";

import { useParams } from "react-router-dom";
import CategoryCard from "./Categorycard";

// const Products =[...electronics, ...grocery, ...sports, ...furniture, ...homedecor, ...gadgets, ...haircare, ...festival, ...season];

const electronics_products = [
  { id: 1, name: "Dell LCD", title: "lcd", price: 20000, discount: "upto 5%", image: lcd1 },
  { id: 2, name: "HP LCD", title: "lcd", price: 23000, discount: "upto 3%", image: lcd2 },
  { id: 3, name: "Dell Thin LCD", title: "lcd", price: 22000, discount: "upto 8%", image: lcd3 },
  { id: 4, name: "Sony LCD", title: "lcd", price: 23000, discount: "upto 4%", image: lcd4 },
  { id: 5, name: "Samsung LCD", title: "lcd", price: 25999, discount: "upto 3%", image: lcd5 },
  { id: 6, name: "Boat", title: "headphones", price: 999, discount: "upto 5%", image: hphone1 },
  { id: 7, name: "Zebronics", title: "headphones", price: 1999, discount: "upto 4%", image: hphone2 },
  { id: 8, name: "Power", title: "headphones", price: 999, discount: "upto 5%", image: hphone3 },
  { id: 9, name: "Zebronics M", title: "headphones", price: 2999, discount: "upto 5%", image: hphone4 },
  { id: 10, name: "Wireless", title: "headphones", price: 1999, discount: "upto 5%", image: hphone5 },
  { id: 11, name: "Motorolla", title: "phones", price: 19999, discount: "upto 4%", image: phone1 },
  { id: 12, name: "Realme", title: "phones", price: 15999, discount: "upto 4%", image: phone2 },
  { id: 13, name: "Samsung", title: "phones", price: 2999, discount: "upto 4%", image: phone3 },
  { id: 14, name: "Samsung Galaxy", title: "phones", price: 25999, discount: "upto 4%", image: phone4 },
  { id: 15, name: "Iphone 15", title: "phones", price: 80000, discount: "upto 4%", image: phone5 },
  { id: 16, name: "Boat", title: "smwatch", price: 999, discount: "upto 5%", image: smwatch1 },
  { id: 17, name: "Rec", title: "smwatch", price: 1999, discount: "upto 5%", image: smwatch2 },
  { id: 18, name: "Boult", title: "smwatch", price: 2999, discount: "upto 3%", image: smwatch3 },
  { id: 19, name: "XR1", title: "smwatch", price: 999, discount: "upto 3%", image: smwatch4 },
  { id: 20, name: "Fasttrack", title: "smwatch", price: 1999, discount: "upto 5%", image: smwatch5 },
  { id: 21, name: "Trigger", title: "speaker", price: 1999, discount: "upto 4%", image: speaker1 },
  { id: 22, name: "Tiny", title: "speaker", price: 999, discount: "upto 2%", image: speaker2 },
  { id: 23, name: "Govo", title: "speaker", price: 2999, discount: "upto 4%", image: speaker3 },
  { id: 24, name: "Large", title: "speaker", price: 3999, discount: "upto 2%", image: speaker4 },
  { id: 25, name: "Boat", title: "speaker", price: 1999, discount: "upto 4%", image: speaker5 },
]

const Categorylist = () => {
  const { category } = useParams();

  const filteredProducts = electronics_products.filter(
    (item) => item.title === category
  );

  return (
    <section className="category-section mt-20">
      <h2 className="capitalize">{category} Products</h2>

      <div className="category-grid">
        {filteredProducts.map((item) => (
          <CategoryCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};
export default Categorylist;

