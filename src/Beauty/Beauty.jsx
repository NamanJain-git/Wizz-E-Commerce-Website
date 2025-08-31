import beautybanner from "../assets/Bannerimg/womenbanner.jpg"
import beautyimg1 from "../assets/Productimgs/beautyimg1.webp"
import beautyimg2 from "../assets/Productimgs/beautyimg2.jpg"
import kidsimg2 from "../assets/Productimgs/kidsimg2.jpg"
import womenimg1 from "../assets/productimgs/womenproduct1.webp"
import Api2 from "../Api/Api2"
import "./Beauty.css"
const Beauty = () => {
    return (
        <section  className="beauty">
            <img src={beautybanner} alt="" />

              <div className="beauty_products mt-20">
                            <img src={beautyimg2} alt="" width="450" />
                            <img src={beautyimg2} alt="" width="450" />
                            <img src={beautyimg2} alt="" width="450" />
                        </div>

                        
                                    <div className="beauty_products_box mt-10">
                                        <div className="beauty_products">
                                            <img src={beautyimg1} alt="" />
                                            <img src={beautyimg1} alt="" />
                                            <img src={beautyimg1} alt="" />
                                            <img src={beautyimg1} alt="" />
                                        </div>
                        
                                        <div className="beauty_products">
                                            <img src={beautyimg1} alt="" />
                                            <img src={beautyimg1} alt="" />
                                            <img src={beautyimg1} alt="" />
                                            <img src={beautyimg1} alt="" />
                                        </div>
                                    </div>
                        
                        <Api2/>

                        
              <div className="beauty_products mt-20">
                            <img src={kidsimg2} alt="" width="450" />
                            <img src={kidsimg2} alt="" width="450" />
                            <img src={kidsimg2} alt="" width="450" />
                        </div>

                         <div className="beauty_products mt-20">
                                            <img src={womenimg1} alt="" />
                                            <img src={womenimg1} alt="" />
                                            <img src={womenimg1} alt="" />
                                            <img src={womenimg1} alt="" />
                                        </div>
          
        </section>
    )
}
export default Beauty