import menbanner from "../assets/Bannerimg/menbanner.webp"
import menproduct1 from "../assets/Productimgs/menproduct1.webp"
import menproduct2 from "../assets/Productimgs/menproduct2.webp"
import menproduct3 from "../assets/Productimgs/menproduct3.webp"
import menproduct4 from "../assets/Productimgs/menproduct4.jpeg"
import menproduct5 from "../assets/Productimgs/menproduct5.jpeg"
import menproduct6 from "../assets/Productimgs/menproduct6.jpeg"
import menproduct7 from "../assets/Productimgs/menproduct7.png"
import menproduct8 from "../assets/Productimgs/menproduct8.jpeg"

import Api from "../Api/Api1"
import "./Men.css"
import { Link } from "react-router-dom";

const Men = () => {
    return (
        <section className="men">
            <img src={menbanner} alt="" />

            <div className="men_products_box mt-10 mb-10">
                <div className="men_products">
                    <img src={menproduct1} alt="" />
                    <img src={menproduct2} alt="" />
                    <img src={menproduct3} alt="" />
                    <img src={menproduct4} alt="" />
                </div>
            </div>

            <Api />

           

            <div className="men_products_box mt-10 mb-10">
                <div className="men_products">
                    <img src={menproduct5} alt="" />
                    <img src={menproduct6} alt="" />
                    <img src={menproduct7} alt="" />
                    <img src={menproduct8} alt="" />
                </div>
            </div>

        </section>
    )
}
export default Men