import womenbanner from "../assets/Bannerimg/womenbanner.jpg"
import { womens_products } from "../Categorypage/CategoryArray";
import { Link } from "react-router-dom";

import "./Women.css"
import Api2 from "../Api/Api2"
const Women = () => {
    return (
        <section className="women">
            <img src={womenbanner} alt="" />

            <div className="women_products_box mt-10 mb-10">
                <div className="women_products">
                    {womens_products.slice(0, 4).map((item) => (
                        <div key={item.id}>
                            <Link to={`/cart/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Api2 />

            <div className="women_products_box mt-10 mb-10">
                <div className="women_products">
                    {womens_products.slice(4, 8).map((item) => (
                        <div key={item.id}>
                            <Link to={`/cart/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default Women