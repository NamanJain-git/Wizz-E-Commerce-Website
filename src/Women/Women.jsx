import womenbanner from "../assets/Bannerimg/womenbanner.jpg"
import womenproduct1 from "../assets/Productimgs/womenproduct1.jpeg"
import womenproduct2 from "../assets/Productimgs/womenproduct2.png"
import womenproduct3 from "../assets/Productimgs/womenproduct3.jpeg"
import womenproduct4 from "../assets/Productimgs/womenproduct4.png"
import womenproduct7 from "../assets/Productimgs/womenproduct7.jpeg"
import womenproduct8 from "../assets/Productimgs/womenproduct8.jpeg"
import womenproduct9 from "../assets/Productimgs/womenproduct9.jpeg"
import womenproduct10 from "../assets/Productimgs/womenproduct10.jpeg"
import "./Women.css"
import Api2 from "../Api/Api2"
const Women = () => {
    return (
        <section className="women">
            <img src={womenbanner} alt="" />

            <div className="women_products_box mt-10 mb-10">
                <div className="women_products">
                    <img src={womenproduct1} alt=""/>
                    <img src={womenproduct2} alt=""/>
                    <img src={womenproduct3} alt=""/>
                    <img src={womenproduct4} alt=""/>
                </div>
            </div>

            <Api2 />

            <div className="women_products_box mt-10 mb-10">
                <div className="women_products">
                    <img src={womenproduct7} alt=""/>
                    <img src={womenproduct8} alt=""/>
                    <img src={womenproduct9} alt=""/>
                    <img src={womenproduct10} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default Women