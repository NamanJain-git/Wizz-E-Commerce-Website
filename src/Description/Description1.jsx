import React, { useEffect, useState } from "react";
import "./Description.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Carouselfunc from "../Carousel/Carouselpage"
import optionimg from "../assets/Headimgs/head2.png"

const Desc = () => {

    const { id } = useParams();
    const [itemdata, setdata] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setdata(data));
    }, [id]);


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
                        <Link to={`/cartforapi/${itemdata.id}`}>
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
                        <p>Expected Deliveryon 10 Aug</p>
                        <span>Available offers</span>
                        <p>Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</p>
                        <p>Bank OfferUp To ₹30 Instant Cashback on BHIM Payments App. Min Order Value ₹199. Offer Valid Once Per UserT&C</p>
                        <p>Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C</p>
                        <span>View 5 more offers</span>

                    </div>

                    <div className="flex-column m-[10px]">
                        <h4>More Options</h4>
                        <div className="flex m-[15px]">
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

export default Desc