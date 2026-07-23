import beautybanner from "../assets/Bannerimg/womenbanner.jpg"
import { beauty_products } from "../Categorypage/CategoryArray";
import { Link } from "react-router-dom";

import "./Beauty.css"

const Beauty = () => {
    return (
        <section className="beauty">
            <img src={beautybanner} alt="" />

            <div className="beauty_products_box beauty_products mt-10">
                {beauty_products.slice(0, 4).map((item) => (
                    <div key={item.id}>
                        <Link to={`/cart/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="beauty_products_box beauty_products mt-10">
                {beauty_products.slice(4, 8).map((item) => (
                    <div key={item.id}>
                        <Link to={`/cart/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="beauty_products_box beauty_products mt-10">
                {beauty_products.slice(8, 12).map((item) => (
                    <div key={item.id}>
                        <Link to={`/cart/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Beauty