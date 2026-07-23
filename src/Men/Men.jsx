import menbanner from "../assets/Bannerimg/menbanner.webp"
import { mens_products } from "../Categorypage/CategoryArray";


import Api from "../Api/Api1"
import "./Men.css"
import { Link } from "react-router-dom";

const Men = () => {
    return (
        <section className="men">
            <img src={menbanner} alt="" />

            <div className="men_products_box mt-10 mb-10">
                <div className="men_products">
                    {mens_products.slice(0, 4).map((item) => (
                        <div key={item.id}>
                            <Link to={`/cart/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Api />

            <div className="men_products_box mt-10 mb-10">
                <div className="men_products">
                    {mens_products.slice(4, 8).map((item) => (
                        <div key={item.id}>
                            <Link to={`/cart/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Men;