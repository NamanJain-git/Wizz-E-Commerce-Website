import kidsbanner from "../assets/Bannerimg/kidsbanner.webp"
import { kids_products } from "../Categorypage/CategoryArray";
import { Link } from "react-router-dom";

import "./Kids.css"

const Kids = () => {
    return (
        <section className="kids">
            <img src={kidsbanner} alt="" />

            <div className="kids_products_box kids_products">
                {kids_products.slice(0, 4).map((item) => (
                    <div key={item.id}>
                        <Link to={`/cart/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="kids_products_box kids_products">
                {kids_products.slice(4, 8).map((item) => (
                    <div key={item.id}>
                        <Link to={`/cart/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="kids_products_box kids_products">
                {kids_products.slice(8, 12).map((item) => (
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
export default Kids