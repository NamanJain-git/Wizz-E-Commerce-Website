import kidsbanner from "../assets/Bannerimg/kidsbanner.webp"
import kidsimg1 from "../assets/Productimgs/kidsimg1.webp"
import kidsimg2 from "../assets/Productimgs/kidsimg2.jpg"
import mensimg1 from "../assets/Productimgs/menimg1.webp"
import mensimg2 from "../assets/Productimgs/menimg2.png"
import "./Kids.css"

const Kids = () => {
    return (
        <section className="kids">
            <img src={kidsbanner} alt="" />

            <div className="kids_products_box mt-10">
                <div className="kids_products">
                    <img src={kidsimg1} alt="" width={320} />
                    <img src={kidsimg1} alt="" width={320} />
                    <img src={kidsimg1} alt="" width={320} />
                    <img src={kidsimg1} alt="" width={320} />
                </div>
            </div>

            <div className="kids_products mt-10">
                <img src={kidsimg2} alt="" width="450" />
                <img src={kidsimg2} alt="" width="450" />
                <img src={kidsimg2} alt="" width="450" />
            </div>

            {/* <div className="kids_products_box mt-10">
                <div className="kids_products">
                    <img src={kidsimg1} alt="" width={320} />
                    <img src={kidsimg1} alt="" width={320} />
                    <img src={kidsimg1} alt="" width={320} />
                    <img src={kidsimg1} alt="" width={320} />
                </div>
            </div> */}

            <div className="grid_section_01">
                <div className="grid_box">
                    <div className="grid_products">
                        <img src={kidsimg1} alt="" />
                        <img src={kidsimg1} alt="" />
                        <img src={kidsimg1} alt="" />
                        <img src={kidsimg1} alt="" />
                    </div>
                </div>

                <div className="grid_box">
                    <div className="grid_products">
                        <img src={mensimg1} alt="" />
                        <img src={mensimg1} alt="" />
                        <img src={mensimg1} alt="" />
                        <img src={mensimg1} alt="" />
                    </div>
                </div>

                <div className="grid_box">
                    <div className="grid_products">
                        <img src={kidsimg1} alt="" />
                        <img src={kidsimg1} alt="" />
                        <img src={kidsimg1} alt="" />
                        <img src={kidsimg1} alt="" />
                    </div>
                </div>
            </div>

              <div className="kids_products mt-10">
                <img src={mensimg2} alt="" width="450" />
                <img src={mensimg2} alt="" width="450" />
                <img src={mensimg2} alt="" width="450" />
            </div>


        </section>
    )
}
export default Kids