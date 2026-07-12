import kidsbanner from "../assets/Bannerimg/kidsbanner.webp"
import kidsproduct1 from "../assets/Productimgs/kidsproduct1.jpeg"
import kidsproduct2 from "../assets/Productimgs/kidsproduct2.jpeg"
import kidsproduct3 from "../assets/Productimgs/kidsproduct3.jpeg"
import kidsproduct4 from "../assets/Productimgs/kidsproduct4.png"
import kidsproduct5 from "../assets/Productimgs/kidsproduct5.webp"
import kidsproduct6 from "../assets/Productimgs/kidsproduct6.jpeg"
import kidsproduct7 from "../assets/Productimgs/kidsproduct7.jpeg"
import kidsproduct8 from "../assets/Productimgs/kidsproduct8.jpeg"
import kidsproduct9 from "../assets/Productimgs/kidsproduct9.jpeg"
import kidsproduct10 from "../assets/Productimgs/kidsproduct10.jpeg"
import kidsproduct11 from "../assets/Productimgs/kidsproduct11.jpeg"
import kidsproduct12 from "../assets/Productimgs/kidsproduct12.jpeg"

import "./Kids.css"

const Kids = () => {
    return (
        <section className="kids">
            <img src={kidsbanner} alt="" />

            <div className="kids_products_box mt-10">
                <div className="kids_products">
                    <img src={kidsproduct1} alt=""/>
                    <img src={kidsproduct2} alt=""/>
                    <img src={kidsproduct3} alt=""/>
                    <img src={kidsproduct4} alt=""/>
                </div>
            </div>

             <div className="kids_products_box mt-10">
                <div className="kids_products">
                    <img src={kidsproduct5} alt=""/>
                    <img src={kidsproduct6} alt=""/>
                    <img src={kidsproduct7} alt=""/>
                    <img src={kidsproduct8} alt=""/>
                </div>
            </div>

             <div className="kids_products_box mt-10">
                <div className="kids_products">
                    <img src={kidsproduct9} alt=""/>
                    <img src={kidsproduct10} alt=""/>
                    <img src={kidsproduct11} alt=""/>
                    <img src={kidsproduct12} alt=""/>
                </div>
            </div>

        </section>
    )
}
export default Kids