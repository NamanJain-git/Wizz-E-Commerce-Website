
import head2_img from "../assets/Headimgs/head2.png"
import head3_img from "../assets/Headimgs/head3.png"
import head4_img from "../assets/Headimgs/head4.png"
import head5_img from "../assets/Headimgs/head5.png"
import head6_img from "../assets/Headimgs/head6.png"
import head7_img from "../assets/Headimgs/head7.png"
import head8_img from "../assets/Headimgs/head8.png"
import head9_img from "../assets/Headimgs/head9.png"
import head10_img from "../assets/Headimgs/head10.png"
import electronics_img from "../assets/Productimgs/electronics.jpeg"
import mobile_img from "../assets/Productimgs/mobiles.jpeg"
import speaker_img from "../assets/Productimgs/speaker.jpeg"
import smartwatch_img from "../assets/Productimgs/smartwatch.jpeg"
import headphone_img from "../assets/Productimgs/headphones.jpeg"

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

import wallclock_img from "../assets/Productimgs/wallclocks.jpeg"
import mats_img from "../assets/Productimgs/mats.jpeg"
import bulb_img from "../assets/Productimgs/bulbs.jpeg"

import facewash_img from "../assets/Productimgs/facewash.jpeg"
import shampoo_img from "../assets/Productimgs/shampoo.jpeg"
import hairclaws_img from "../assets/Productimgs/hairclaws.jpeg"
import moisturizer_img from "../assets/Productimgs/moisturizer.jpeg"
import decofigures_img from "../assets/Productimgs/decofigures.jpeg"
import bag_img from "../assets/Productimgs/gymbags.jpeg"
import dumbel_img from "../assets/Productimgs/gymproduct2.jpeg"
import dryfruit_img from "../assets/Productimgs/dryfruits.jpeg"
import wardrobe_img from "../assets/Productimgs/wardrobe.jpeg"
import chair_img from "../assets/Productimgs/chair.jpeg"
import menimg2 from "../assets/Productimgs/menimg2.png"
import menimg1 from "../assets/Productimgs/menimg1.webp"
import kidsimg2 from "../assets/Productimgs/kidsimg2.jpg"
import kidsimg1 from "../assets/Productimgs/kidsimg1.webp"
import beautyimg2 from "../assets/Productimgs/beautyimg2.jpg"
import womenimg1 from "../assets/productimgs/womenproduct1.webp"
import womenproduct3 from "../assets/Productimgs/womenproduct3.webp"
import womenproduct4 from "../assets/Productimgs/womenproduct4.webp"
import womenproduct5 from "../assets/Productimgs/womenproduct5.webp"
import womenbannerimg from "../assets/Bannerimg/womenbanner.jpg"

import Carouselfunc from "../Carousel/Carouselpage";
import { Link } from "react-router-dom";
import Api from "../Api/Api1";
import Api2 from "../Api/Api2";
import "./Home.css"
import { useSearch } from "../Usecontext/Usecontext"




export const electronics = [
    { id: 101, title: "Dell LCD", name: "LCD", price: 20000, discount: "upto 5%", image: electronics_img },
    { id: 102, title: "Boat Headphone", name: "Headphones", price: 999, discount: "upto 3%",image: headphone_img },
    { id: 103, title: "Poco Mobile", name: "Mobiles", price: 15000, discount: "upto 10%", image: mobile_img },
    { id: 104, title: "Noise Smart Watch", name: "Watches", price: 1499, discount: "upto 8%", image: smartwatch_img },
    { id: 105, title: "Boat Speaker", name: "Speakers", price: 2999, discount: "upto 8%", image: speaker_img },

]

export const grocery = [
    { id: 201, title: "Tata Tea", name: "Tea Powder", price: 99, discount: "upto 2%", image: tea_img },
    { id: 202, title: "Peanut Butter", name: "Food Spreads", price: 499, discount: "upto 5%", image: foodspread_img },
    { id: 205, title: "Yoga Bar Cereal", name: "Breakfast cereals", price: 349, discount: "upto 7%", image: cereal_img },
    { id: 203, title: "Bevzilla Coffee", name: "Coffee Powder", price: 200, discount: "upto 10%", image: cofeepowder_img },
    { id: 204, title: "Forest Honey", name: "Honey", price: 299, discount: "upto 10%", image: honey_img }
]

export const sports = [
    { id: 301, title: "Gym Equipments", name: "Gym Products", price: 2999, discount: "upto 20%", image: gym_img },
    { id: 302, title: "Gared Cycle", name: "Geared Cycles", price: 3999, discount: "upto 15%", image: garedcycle_img },
    { id: 303, title: "Dry Fruits", name: "Dry Fruits & Nuts", discount: "Min. 10%", image: dryfruit_img },
    { id: 304, title: "Dumbels", name: "Dumbels", discount: "Min. 4%", image: dumbel_img },
    { id: 305, title: "Bags", name: "Bags", discount: "Min. 10%", image:  bag_img },
]

export const toys = [
    { id: 401, title: "Teddy Bear", name: "Soft Toys", price: 2000, discount: "upto 15%", image: softtoys_img },
    { id: 402, title: "Doms Colours", name: "Stationary", price: 199, discount: "upto 5%", image: stationary_img },
    { id: 403, title: "Goku Action Figure", name: "Action Figures", price: 999, discount: "upto 10%", image: actionfigure_img },
    { id: 404, title: "Puzzle House", name: "Puzzle & Cubes", price: 199, discount: "upto 20%", image: puzzle_img },
    { id: 405, title: "Alphabet Calendar", name: "Learning & Education", price: 199, discount: "upto 20%", image: learning_img }
]

export const homedecor = [
    { id: 501, title: "Wall Clocck", name: "Wall Clocks", discount: "Upto 10%", image: wallclock_img },
    { id: 502, title: "Decorative murti", name: "decoration murti", discount: "Min. 20%", image: decofigures_img },
    { id: 503, title: "LED Bulb", name: "Bulbs", discount: "Min. 10%", image: bulb_img },
    { id: 504, title: "House Mats", name: "Mats", discount: "Min. 30%", image: mats_img }
]

export const furniture = [
    { id: 601, title: "Home Temple ", name: "Home Temple", price: 8999, discount: "Min. 10%", image: hometemple_img },
    { id: 602, title: "Drawers", name: "Drawers", price: 6999, discount: "Min. 10%", image: drawer_img },
    { id: 603, title: "Wardrobe", name: "Wardrobs", price: 3999, discount: "Min. 10%", image: wardrobe_img },
    { id: 604, title: "Chairs", name: "Chairs", price: 599, discount: "Min. 10%", image: chair_img }
]

export const haircare = [
    { id: 701, title: "Mama Earth Facewash", name: "Facewash", discount: "Min. 10%", image: facewash_img },
    { id: 702, title: "Flower Hair Claws", name: "Hair claws", discount:  "Min. 10%", image: hairclaws_img },
    { id: 703, title: "Flix Shampoo", name: "Shampoos", discount:  "Min. 10%", image: shampoo_img },
    { id: 704, title: "Moisturizer", name: "Moisturizer", discount:  "Min. 10%", image: moisturizer_img }
]

export const festival = [
    { id: 801, title: "Dell LCD", name: "T-shirts", discount: "Min. 30%", image: womenimg1 },
    { id: 802, title: "Dell LCD", name: "Wrist watches", discount: "Min. 20%", image: menimg1 },
    { id: 803, title: "Dell LCD", name: "Women Sarees", discount: "Min. 20%", image: kidsimg1 },
    { id: 804, title: "Dell LCD", name: "Women Gowns", discount:  "Min. 10%", image: womenproduct5 }
]

export const season = [
    { id: 901, title: "Dell LCD", name: "Dry Fruits & Nuts", discount: "Min. 10%", image: womenproduct3 },
    { id: 902, title: "Dell LCD", name: "Cycles", discount: "Min. 20%", image: womenproduct4 },
    { id: 903, title: "Dell LCD", name: "Bike Helmets", discount: "Min. 10%", image: womenimg1 },
    { id: 904, title: "Dell LCD", name: "Musical Keyboards", discount: "Upto 20%", image: womenproduct5 }
]


const Home = () => {
    const { search } = useSearch();
    // const allProducts = [...electronics, ...grocery, ...sports];

    const filterproducts1 = electronics.filter((product) =>
        `${product.title} ${product.name}`.toLowerCase().includes(search.toLowerCase())
    );
    const filterproducts2 = toys.filter((product) =>
        `${product.title} ${product.name}`.toLowerCase().includes(search.toLowerCase())
    );
    const filterproducts3 = sports.filter((product) =>
        `${product.title} ${product.name}`.toLowerCase().includes(search.toLowerCase())
    );
    const handlelogin = (e) => {
        if (currentUser) {

        }
    }

    return (
        <section className="home">
            <div className="head">
                <div className="head_cont">
                    <Link to="category"><img src={head2_img} alt="" /></Link>
                    <p>Mobile</p>
                </div>
                <div className="head_cont">
                    <img src={head3_img} alt="" />
                    <p>Fashion</p>
                </div>
                <div className="head_cont">
                    <img src={head4_img} alt="" />
                    <p>Electronic</p>
                </div>
                <div className="head_cont">
                    <img src={head5_img} alt="" />
                    <p>Furniture</p>
                </div>
                <div className="head_cont">
                    <img src={head6_img} alt="" />
                    <p>Machines</p>
                </div>
                <div className="head_cont">
                    <img src={head7_img} alt="" />
                    <p>Travels</p>
                </div>
                <div className="head_cont">
                    <img src={head8_img} alt="" />
                    <p>Beauty</p>
                </div>
                <div className="head_cont">
                    <img src={head9_img} alt="" />
                    <p>Grocery</p>
                </div>
                <div className="head_cont">
                    <img src={head10_img} alt="" />
                    <p>Grocery</p>
                </div>
            </div>

            <Carouselfunc />


            <div className="products_box">
                <div className="title">
                    <h1>Best of Electronics</h1>
                </div>
                <div className="products">
                    {filterproducts1.map((product) => (
                        <div key={product.id}>
                            <Link to={`/description2/${product.id}`}>
                                <img src={product.image} alt="" />
                            </Link>
                            <p>{product.name}</p>
                            <p>₹{product.price}</p>
                        </div>

                    ))}
                </div>
            </div>

            <div className="products_box">
                <div className="title">
                    <h1>Beauty, Food, Toys and More</h1>
                </div>
                <div className="products">
                    {filterproducts2.map((product) => (
                        <div key={product.id}>
                            <Link to={`/description2/${product.id}`}>
                                <img src={product.image} alt="" />
                            </Link>
                            <p>{product.name}</p>
                            <p>₹{product.price}</p>
                        </div>

                    ))}
                </div>
            </div>

            <div className="products_box">
                <div className="title">
                    <h1>Sports, Healthcare and More</h1>
                </div>
              <div className="products">
                   {filterproducts3.map((product) => (
                        <div key={product.id}>
                            <Link to={`/description2/${product.id}`}>
                                <img src={product.image} alt="" />
                            </Link>
                            <p>{product.name}</p>
                            <p>₹{product.price}</p>
                        </div>

                    ))}
                </div>
            </div>

            <Api />

            <div className="grid_section_01">
                <div className="grid_box">
                    <div className="title">
                        <h2>Hair & Skin care</h2>
                    </div>
                    <div className="grid_products">
                        {haircare.map((item) => (
                            <div className="image" key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid_box">
                    <div className="title">
                        <h2>Make your home stylish</h2>
                    </div>
                    <div className="grid_products">
                        {furniture.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid_box">
                    <div className="title">
                        <h2>Festival Specials</h2>
                    </div>
                    <div className="grid_products">
                        {festival.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="grid_section_01">
                <div className="grid_box">
                    <div className="title">
                        <h2>Hair & Skin care</h2>
                    </div>
                    <div className="grid_products">
                        {haircare.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid_box">
                    <div className="title">
                        <h2>Home Decor & Furnishings</h2>
                    </div>
                    <div className="grid_products">
                        {homedecor.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid_box">
                    <div className="title">
                        <h2>Trending Gadgets & Appliances</h2>
                    </div>
                    <div className="grid_products ">
                        {gadgets.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" width={250} />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid_section_02">
                <div className="grid_box">
                    <div className="title">
                        <h2>Seasons Top pick</h2>
                    </div>
                    <div className="grid_products">
                        {season.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid_box">
                    <div className="title">
                        <h2>Make your home stylish</h2>
                    </div>
                    <div className="grid_products">
                        {furniture.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid_box">
                    <div className="title">
                        <h2>Festival Specials</h2>
                    </div>
                    <div className="grid_products">
                        {festival.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.discount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <div className="saleImgs">
                <img src={kidsimg2} alt="" />
                <img src={menimg2} alt="" />
                <img src={beautyimg2} alt="" />
            </div>

            <Api2 />

            <div className="saleImgs">
                <img src={womenbannerimg} alt="" />
            </div>
        </section>
    )
}

export default Home




















