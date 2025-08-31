import menbanner from "../assets/Bannerimg/menbanner.webp"
import mensimg1 from "../assets/Productimgs/menimg1.webp"
import mensimg2 from "../assets/Productimgs/menimg2.png"
import womensimg2 from "../assets/Productimgs/womenimg2.jpg"
import kidsimg2 from "../assets/Productimgs/kidsimg2.jpg"
// import Api from "/Api1"
// import Api2 from "../Api2"
import Api from "../Api/Api1"
import Api2 from "../Api/Api2"
import "./Men.css"
import { Link } from "react-router-dom";

const Men = () => {
    return (
        <section className="men">
            <img src={menbanner} alt="" />

            <div className="men_products_box mt-10 mb-10">
                <div className="men_products">
                    <img src={mensimg1} alt="" />
                    <img src={mensimg1} alt="" />
                    <img src={mensimg1} alt="" />
                    <img src={mensimg1} alt="" />
                </div>
            </div>

            <Api />

            <div className="men_products mt-10">
                <Link to="/description">
                    <img src={mensimg2} alt="Men's Product" width="450" />
                </Link>
                {/* <img src={mensimg2} alt="" width="450" /> */}
                <img src={kidsimg2} alt="" width="450" />
                <img src={womensimg2} alt="" width="450" />
            </div>

            <div className="men_products_box mt-10 mb-10">
                <div className="men_products">
                    <img src={mensimg1} alt="" />
                    <img src={mensimg1} alt="" />
                    <img src={mensimg1} alt="" />
                    <img src={mensimg1} alt="" />
                </div>
            </div>

            <Api2 />

        </section>
    )
}
export default Men