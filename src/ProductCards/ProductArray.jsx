import electronics_img from "../assets/Productimgs/electronics.jpeg"
import mobile_img from "../assets/Productimgs/mobiles.jpeg"
import speaker_img from "../assets/Productimgs/speaker.jpeg"
import smartwatch_img from "../assets/Productimgs/smartwatch.jpeg"
import headphone_img from "../assets/Productimgs/headphones.jpeg"
import projectors_img from "../assets/Productimgs/projectors.jpeg"
import softtoys_img from "../assets/Productimgs/softtoys.jpeg"
import foodspread_img from "../assets/Productimgs/foodspread.jpeg"
import garedcycle_img from "../assets/Productimgs/garedcycle.jpeg"
import cofeepowder_img from "../assets/Productimgs/cofeepowders.jpeg"
import actionfigure_img from "../assets/Productimgs/actionfigures.jpeg"
import stationary_img from "../assets/Productimgs/stationary.jpeg"
import puzzle_img from "../assets/Productimgs/puzzle.jpeg"
import gym_img from "../assets/Productimgs/gymproducts.jpeg"
import cereal_img from "../assets/Productimgs/cereals.jpeg"
import tea_img from "../assets/Productimgs/tea.jpeg"
import learning_img from "../assets/Productimgs/learning.jpeg"
import honey_img from "../assets/Productimgs/honey.jpeg"
import hometemple_img from "../assets/Productimgs/hometemple.jpeg"
import drawer_img from "../assets/Productimgs/drawer.jpeg"
import chair_img from "../assets/Productimgs/chairs.jpeg"
import bed_img from "../assets/Productimgs/beds.jpeg"
import wallclock_img from "../assets/Productimgs/wallclocks.jpeg"
import mats_img from "../assets/Productimgs/mats.jpeg"
import bulb_img from "../assets/Productimgs/bulbs.jpeg"
import torch_img from "../assets/Productimgs/torch.jpeg"
import facewash_img from "../assets/Productimgs/facewash.jpeg"
import shampoo_img from "../assets/Productimgs/shampoo.jpeg"
import hairclaws_img from "../assets/Productimgs/hairclaws.jpeg"
import moisturizer_img from "../assets/Productimgs/moisturizer.jpeg"
import menimg2 from "../assets/Productimgs/menimg2.png"
import menimg1 from "../assets/Productimgs/menimg1.webp"
import kidsimg2 from "../assets/Productimgs/kidsimg2.jpg"
import kidsimg1 from "../assets/Productimgs/kidsimg1.webp"
import beautyimg2 from "../assets/Productimgs/beautyimg2.jpg"
import womenimg1 from "../assets/productimgs/womenproduct1.webp"
import womenbannerimg from "../assets/Bannerimg/womenbanner.jpg"

import "./Product.css";

// const ProductArray =()=>{


export const electronics = [
    { id: 1, title: "Dell LCD", name: "LCD", price: 20000, image: electronics_img },
    { id: 2, title: "Boat Headphone", name: "Headphones", price: 999, image: headphone_img },
    { id: 3, title: "Poco Mobile", name: "Mobiles", price: 15000, image: mobile_img },
    { id: 4, title: "Dell LCD", name: "Laptops", discount: "Min. 50% off", image: menimg2 },
    { id: 5, title: "Boat Speaker", name: "Speakers", price: 2999, image: speaker_img },
    // { id: 6, title: "ANSI Projector", name: "Projectors", price: 1299, image: projectors_img }

]

export const grocery = [
    { id: 102, title: "Peanut Butter", name: "Food Spreads", discount: "upto 75%", image: foodspread_img },
    { id: 103, title: "Tata Tea", name: "Tea Powder", discount: "upto 75%", image: tea_img },
    { id: 104, title: "Bevzilla Coffee", name: "Coffee Powder", discount: "upto 70%", image: cofeepowder_img },
    { id: 105, title: "Alphabet Calendar", name: "Learning & Education", discount: "upto 80%", image: learning_img },
]

export const sports = [
    { id: 201, title: "Gym Equipments", name: "Gym Products", discount: "upto 75%", image: gym_img },
    { id: 202, title: "Yoga Bar Cereal", name: "Breakfast cereals", discount: "upto 70%", image: cereal_img },
    { id: 203, title: "Gared Cycle", name: "Geared Cycles", discount: "upto 80%", image: garedcycle_img },
    { id: 204, title: "Forest Honey", name: "Honey", discount: "upto 70%", image: honey_img }
]

export const furniture = [
    { id: 301, title: "Home Temple ", name: "Home Temple", discount: "Min. 50% off", image: hometemple_img },
    { id: 302, title: "Drawers", name: "Drawers", discount: "Min. 50% off", image: drawer_img },
    { id: 303, title: "Swing Chairs", name: "Swing Chairs", discount: "Min. 50% off", image: chair_img },
    { id: 304, title: "Folding Bed", name: "Bed", discount: "Min. 50% off", image: bed_img }
]

export const homedecor = [
    { id: 401, title: "Wall Clocck", name: "Wall Clocks", discount: "Popular", image: wallclock_img },
    { id: 402, title: "Torches", name: "Torches", discount: "Min. 50% off", image: torch_img },
    { id: 403, title: "LED Bulb", name: "Bulbs", discount: "Min. 50% off", image: bulb_img },
    { id: 404, title: "House Mats", name: "Mats", discount: "Min. 50% off", image: mats_img }
]

export const toys = [
    { id: 501, title: "Goku Action Figure", name: "Action Figures", discount: "upto 60%", image: actionfigure_img },
    { id: 502, title: "Puzzle House", name: "Puzzle & Cubes", discount: "upto 80%", image: puzzle_img },
    { id: 503, title: "Teddy Bear", name: "Soft Toys", discount: "upto 70%", image: softtoys_img },
    { id: 504, title: "Doms Colours", name: "Stationary", discount: "upto 80%", image: stationary_img }
]

export const haircare = [
    { id: 601, title: "Mama Earth Facewash", name: "Facewash", discount: "Min. 50% off", image: facewash_img },
    { id: 602, title: "Flower Hair Claws", name: "Hair claws", discount: "Widest Range", image: hairclaws_img },
    { id: 603, title: "Flix Shampoo", name: "Shampoos", discount: "Min. 50% off", image: shampoo_img },
    { id: 604, title: "Moisturizer", name: "Moisturizer", discount: "Min. 50% off", image: moisturizer_img }
]

export const festival = [
    { id: 701, title: "T-shirts", name: "T-shirts", discount: "Min. 50% off", image: womenimg1 },
    { id: 702, title: "Wrist watches", name: "Wrist watches", discount: "Min. 90% off", image: womenimg1 },
    { id: 703, title: "Women Sarees", name: "Women Sarees", discount: "Min. 50% off", image: womenimg1 },
    { id: 704, title: "Women Gowns", name: "Women Gowns", discount: "Hand Picked", image: womenimg1 }
]

export const season = [
    { id: 801, title: "Dry Fruits & Nuts", name: "Dry Fruits & Nuts", discount: "Min. 50% off", image: menimg1 },
    { id: 802, title: "Cycles", name: "Cycles", discount: "Min. 50% off", image: menimg1 },
    { id: 803, title: "Bike Helmets", name: "Bike Helmets", discount: "Min. 50% off", image: menimg1 },
    { id: 804, title: "Musical Keyboards", name: "Musical Keyboards", discount: "Min. 40% off", image: menimg1 }
]

//  return(
//     <h2>hello</h2>
//  )
// }

// export default ProductArray;