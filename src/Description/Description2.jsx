import "./Description.css"
import Carouselfunc from "../Carousel/Carouselpage"
import optionimg from "../assets/Headimgs/head2.png"
import { useParams, Link } from "react-router-dom";
import { electronics, toys, sports } from "../Home/Home";




const Desc2 = () => {

    const { id } = useParams();
    const itemdata = electronics.find((p) => p.id === parseInt(id)) || toys.find((p) => p.id === parseInt(id)) || sports.find((p) => p.id === parseInt(id));


    if (!itemdata) {
        return <div>Product not found</div>;
    }


    return (
        <section className="description">
            <div className="desc-box">
                <div className="desc-left">
                    <div className="desc-img">
                        <img src={itemdata.image} alt={itemdata.title} />
                    </div>
                    <div className="desc-btn">
                        <button>Buy Now</button>
                        <Link to={`/cart/${itemdata.id}`}>
                            <button>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <div className="desc-right">
                    <div className="desc-content">

                        <p className="productname">{itemdata.title}</p>
                        <p><span>4.5 ⭐ </span>38,835 ratings & 1930 Reviews</p>
                        <h3>₹{itemdata.price}/-</h3>
                        <p>{itemdata.description}</p>
                        <span>Available offers</span>
                        <p>Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</p>
                        <p>Bank OfferUp To ₹30 Instant Cashback on BHIM Payments App. Min Order Value ₹199. Offer Valid Once Per UserT&C</p>
                        <p>Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C</p>
                        <span>View 5 more offers</span>

                    </div>

                    <div className="flex-column m-[20px]">
                        <h4>More Options</h4>
                        <div className="flex m-[25px]">
                            <img className="w-[100px] m-[2px]" src={optionimg} alt="" />
                            <img className="w-[100px] m-[2px]" src={optionimg} alt="" />
                            <img className="w-[100px] m-[2px]" src={optionimg} alt="" />
                            <img className="w-[100px] m-[2px]" src={optionimg} alt="" />
                            <img className="w-[100px] m-[2px]" src={optionimg} alt="" />
                            <img className="w-[100px] m-[2px]" src={optionimg} alt="" />

                        </div>
                    </div>

                </div>
            </div>

            <Carouselfunc />
        </section>
    )
}

export default Desc2