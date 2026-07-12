import lcd_img from "../assets/Productimgs/lcd.jpeg"
import headphone_img from "../assets/Productimgs/headphones.jpeg"
import mobile_img from "../assets/Productimgs/mobiles.jpeg"
import smartwatch_img from "../assets/Productimgs/smartwatch.jpeg"
import speaker_img from "../assets/Productimgs/speaker.jpeg"

import softtoys_img from "../assets/Productimgs/softtoys.jpeg"
import stationary_img from "../assets/Productimgs/stationary.jpeg"
import actionfigure_img from "../assets/Productimgs/actionfigures.jpeg"
import puzzle_img from "../assets/Productimgs/puzzle.jpeg"
import learning_img from "../assets/Productimgs/learning.jpeg"

import gym_img from "../assets/Productimgs/gymproducts.jpeg"
import garedcycle_img from "../assets/Productimgs/garedcycle.jpeg"
import dryfruit_img from "../assets/Productimgs/dryfruits.jpeg"
import dumbel_img from "../assets/Productimgs/gymproduct2.jpeg"
import bag_img from "../assets/Productimgs/gymbags.jpeg"

import facewash_img from "../assets/Productimgs/facewash.jpeg"
import hairclaws_img from "../assets/Productimgs/hairclaws.jpeg"
import shampoo_img from "../assets/Productimgs/shampoo.jpeg"
import moisturizer_img from "../assets/Productimgs/moisturizer.jpeg"

import hometemple_img from "../assets/Productimgs/hometemple.jpeg"
import drawer_img from "../assets/Productimgs/drawer.jpeg"
import wardrobe_img from "../assets/Productimgs/wardrobe.jpeg"
import chair_img from "../assets/Productimgs/chair.jpeg"

import womenproduct5 from "../assets/Productimgs/womenproduct5.jpeg"
import menproduct9 from "../assets/Productimgs/menproduct9.jpeg"
import kidsproduct1 from "../assets/Productimgs/kidsproduct1.jpeg"
import womenproduct6 from "../assets/Productimgs/womenproduct6.jpeg"

import womenbannerimg from "../assets/Bannerimg/womenbanner.jpg"

import Carouselfunc from "../Carousel/Carouselpage";
import { Link } from "react-router-dom";
import Api from "../Api/Api1";
import Api2 from "../Api/Api2";
import "./Home.css"
import { useSearch } from "../Usecontext/Usecontext"




export const electronics = [
    { id: 101, title: "Dell LCD", category: "lcd", name: "LCD", price: 20000, discount: "upto 5%", image: lcd_img },
    { id: 102, title: "Boat Headphone", category: "headphones", name: "Headphones", price: 999, discount: "upto 3%", image: headphone_img },
    { id: 103, title: "Poco Mobile", category: "phones", name: "Mobiles", price: 15000, discount: "upto 10%", image: mobile_img },
    { id: 104, title: "Noise Smart Watch", category: "smwatch", name: "Watches", price: 1499, discount: "upto 8%", image: smartwatch_img },
    { id: 105, title: "Boat Speaker", category: "speaker", name: "Speakers", price: 2999, discount: "upto 8%", image: speaker_img },
]

export const toys = [
    { id: 201, title: "Teddy Bear", category: "soft-toy", name: "Soft Toys", price: 2000, discount: "upto 15%", image: softtoys_img },
    { id: 202, title: "Doms Colours", category: "stationary", name: "Stationary", price: 199, discount: "upto 5%", image: stationary_img },
    { id: 203, title: "Goku Action Figure", category: "action-figures", name: "Action Figures", price: 999, discount: "upto 10%", image: actionfigure_img },
    { id: 204, title: "Puzzle House", category: "puzzles", name: "Puzzle & Cubes", price: 199, discount: "upto 20%", image: puzzle_img },
    { id: 205, title: "Alphabet Calendar", category: "learning", name: "Learning & Education", price: 199, discount: "upto 20%", image: learning_img }
]

export const sports = [
    { id: 301, title: "Gym Equipments", category: "gym", name: "Gym Products", price: 2999, discount: "upto 20%", image: gym_img },
    { id: 302, title: "Gared Cycle", category: "cycles", name: "Geared Cycles", price: 3999, discount: "upto 15%", image: garedcycle_img },
    { id: 303, title: "Dry Fruits", category: "dfruits", name: "Dry Fruits & Nuts", price: 2000, discount: "Min. 10%", image: dryfruit_img },
    { id: 304, title: "Dumbels", category: "dumbles", name: "Dumbels", price: 999, discount: "Min. 4%", image: dumbel_img },
    { id: 305, title: "Bags", category: "bags", name: "Bags", price: 599, discount: "Min. 10%", image: bag_img },
]

export const haircare = [
    { id: 401, title: "Mama Earth Facewash", name: "Facewash", discount: "Min. 5% off", image: facewash_img },
    { id: 402, title: "Flower Hair Claws", name: "Hair claws", discount: "Min. 5% off", image: hairclaws_img },
    { id: 403, title: "Flix Shampoo", name: "Shampoo", discount: "Min. 5% off", image: shampoo_img },
    { id: 404, title: "Moisturizer", name: "Moisturizer", discount: "Min. 5% off", image: moisturizer_img }
]

export const furniture = [
    { id: 501, title: "Home Temple ", name: "Home Temple", price: 8999, discount: "Min. 10% off", image: hometemple_img },
    { id: 502, title: "Drawers", name: "Drawer", price: 6999, discount: "Min. 10% off", image: drawer_img },
    { id: 503, title: "Wardrobe", name: "Wardrob", price: 3999, discount: "Min. 10% off", image: wardrobe_img },
    { id: 504, title: "Chairs", name: "Chair", price: 599, discount: "Min. 10% off", image: chair_img }
]

export const festival = [
    { id: 601, title: "Dell LCD", name: "Saree", discount: "Min. 30% off", image: womenproduct5 },
    { id: 602, title: "Dell LCD", name: "Men suit", discount: "Min. 20% off", image: menproduct9 },
    { id: 603, title: "Dell LCD", name: "Kids suit", discount: "Min. 20% off", image: kidsproduct1 },
    { id: 604, title: "Dell LCD", name: "Women Gown", discount: "Min. 10% off", image: womenproduct6 }
]


const Home = () => {
    const { search } = useSearch();

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

            <Carouselfunc />

            <div className="products_box">
                <div className="title">
                    <h1>Best of Electronics</h1>
                </div>
                <div className="products">
                    {filterproducts1.map((product) => (
                        <div key={product.id}>
                            <Link to={`/category/${product.category}`}>
                                <img src={product.image} alt={product.title} />
                            </Link>

                            <p>{product.name}</p>
                            <p>From ₹{product.price}</p>
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
                            <Link to={`/category/${product.category}`}>
                                <img src={product.image} alt={product.title} />
                            </Link>

                            <p>{product.name}</p>
                            <p>From ₹{product.price}</p>
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
                            <Link to={`/category/${product.category}`}>
                                <img src={product.image} alt={product.title} />
                            </Link>

                            <p>{product.name}</p>
                            <p>From ₹{product.price}</p>
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

            <Api2 />

            <div className="saleImgs">
                <img src={womenbannerimg} alt="" />
            </div>
        </section>
    )
}

export default Home
