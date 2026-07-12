import beautybanner from "../assets/Bannerimg/womenbanner.jpg"
import beautyproduct1 from "../assets/Productimgs/beautyproduct1.jpeg"
import beautyproduct2 from "../assets/Productimgs/beautyproduct2.jpeg"
import beautyproduct3 from "../assets/Productimgs/beautyproduct3.jpeg"
import beautyproduct4 from "../assets/Productimgs/beautyproduct4.jpeg"
import beautyproduct5 from "../assets/Productimgs/beautyproduct5.jpeg"
import womenproduct7 from "../assets/Productimgs/womenproduct7.jpeg"
import womenproduct8 from "../assets/Productimgs/womenproduct8.jpeg"
import womenproduct9 from "../assets/Productimgs/womenproduct9.jpeg"
import hairclaws from "../assets/Productimgs/hairclaws.jpeg"
import facewash from "../assets/Productimgs/facewash.jpeg"
import shampoo from "../assets/Productimgs/shampoo.jpeg"
import moisturizer from "../assets/Productimgs/moisturizer.jpeg"

import "./Beauty.css"

const Beauty = () => {
    return (
        <section className="beauty">
            <img src={beautybanner} alt="" />

            <div className="beauty_products_box beauty_products mt-10">
                <img src={beautyproduct5} alt="" />
                <img src={hairclaws} alt="" />
                <img src={beautyproduct4} alt="" />
                <img src={facewash} alt="" />
            </div>

            <div className="beauty_products_box beauty_products mt-10">
                <img src={beautyproduct2} alt="" />
                <img src={moisturizer} alt="" />
                <img src={beautyproduct1} alt="" />
                <img src={beautyproduct3} alt="" />
            </div>

            <div className="beauty_products_box beauty_products mt-10">
                <img src={shampoo} alt="" />
                <img src={womenproduct7} alt="" />
                <img src={womenproduct8} alt="" />
                <img src={womenproduct9} alt="" />
            </div>

        </section>
    )
}
export default Beauty