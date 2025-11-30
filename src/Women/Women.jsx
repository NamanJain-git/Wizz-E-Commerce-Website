import womenbanner from "../assets/Bannerimg/womenbanner.jpg"
import womenimg2 from "../assets/Productimgs/womenimg2.jpg"
import kidsimg2 from "../assets/Productimgs/kidsimg2.jpg"
import menimg1 from "../assets/Productimgs/menimg1.webp"
import beautyimg2 from "../assets/Productimgs/beautyimg2.jpg"
import beautyimg1 from "../assets/Productimgs/beautyimg1.webp"
import womenproduct1 from "../assets/Productimgs/womenproduct1.webp"
import womenproduct2 from "../assets/Productimgs/womenproduct2.webp"
import womenproduct3 from "../assets/Productimgs/womenproduct3.webp"
import womenproduct4 from "../assets/Productimgs/womenproduct4.webp"
import womenproduct5 from "../assets/Productimgs/womenproduct5.webp"
import womenproduct6 from "../assets/Productimgs/womenproduct6.webp"
import womenproduct7 from "../assets/Productimgs/womenproduct7.webp"
import womenproduct8 from "../assets/Productimgs/womenproduct8.jpeg"
import womenproduct9 from "../assets/Productimgs/womenproduct9.jpeg"
import womenproduct10 from "../assets/Productimgs/womenproduct10.jpeg"
import womenproduct11 from "../assets/Productimgs/womenproduct11.jpeg"
import "./Women.css"
import Api from "../Api/Api1"
import Api2 from "../Api/Api2"
const Women = () => {
    return (
        <section className="women">
            <img src={womenbanner} alt="" />

            <div className="women_products_box mt-10 mb-10">
                <div className="women_products">
                    <img src={womenproduct1} alt="" width={300} />
                    <img src={womenproduct2} alt="" width={300} />
                    <img src={womenproduct3} alt="" width={300} />
                    <img src={womenproduct4} alt="" width={300} />
                </div>
            </div>

            <Api2 />

            <div className="women_products mt-10">
                <img src={womenimg2} alt="" width={450} />
                <img src={kidsimg2} alt="" width={450} />
                <img src={beautyimg2} alt="" width={450} />
            </div>

            <div className="women_products_box mt-10 mb-10">
                <div className="women_products">
                    <img src={womenproduct8} alt="" width={300} />
                    <img src={womenproduct9} alt="" width={300} />
                    <img src={womenproduct10} alt="" width={300} />
                    <img src={womenproduct11} alt="" width={300} />
                </div>
            </div>

            {/* <div className="women_products gap-2">
                <img src={beautyimg1} alt="" width={300} />
                <img src={womenproduct6} alt="" width={300} />
                <img src={menimg1} alt="" width={300} />
                <img src={womenproduct7} alt="" width={300} />
                <img src={womenproduct5} alt="" width={300} />
                
            </div> */}


        </section>
    )
}
export default Women