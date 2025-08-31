import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carouselfunc from "../Carousel/Carouselpage";
import optionimg from "../assets/Headimgs/head2.png";

import { useDispatch } from "react-redux";
import { addToCart } from "../Slice/Slicecart";

const CartforApi = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const [count, setCount] = useState(1);
    const disc = 50;
    const extraFee = 200;

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
        <section className="py-[150px] min-h-screen bg-gray-100">
            <div className="flex max-w-full mb-[40px] bg-gray-50 ">
                <div className="flex cart-left w-[60%] flex-col justify-center items-center p-[15px] gap-[20px]">

                    <div className="flex gap-[80px] items-center bg-white border">
                        <div className="">
                            <img className="w-[300px] m-[4px] border" src={itemdata.image} alt={itemdata.title} />
                        </div>
                        <div className="">
                            <p className="font-bold">{itemdata.title}</p>
                            <p><span className="bg-green-500 rounded-[6px] text-white m-[2px] font-bold">4.5 ⭐ </span> 38,835 ratings & 1930 Reviews</p>
                            <h3 className="m-[4px]">₹{itemdata.price}/-</h3>
                        </div>
                        <div className="delivery-date m-[2px] font-[600]">
                            <p>Delivery by Mon 18</p>
                        </div>
                    </div>

                    <div className="bg-white m-[4px] p-[4px] shadow ">
                        <span className="m-[6px] bg-green-500 rounded-[2px] text-white  font-bold">Available offers</span>
                        <p className="m-[2px]">Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</p>
                        <p className="m-[2px]">Bank OfferUp To ₹30 Instant Cashback on BHIM Payments App. Min Order Value ₹199. Offer Valid Once Per UserT&C</p>
                        <p className="m-[2px]">Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C</p>
                        <span className="bg-green-500 rounded-[2px] text-white m-[2px] font-bold">View 5 more offers</span>
                    </div>


                    <div className="flex items-center justify-center bg-gray-100">
                        <div className="flex items-center gap-4 shadow p-1 rounded-lg">

                            <button
                                className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition flex items-center justify-center"
                                onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1);
                                    }
                                }}
                            >


                                -
                            </button>

                            <span className="text-2xl font-bold w-12 text-center">{count}</span>

                            <button
                                className="w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center justify-center"
                                onClick={() => setCount(count + 1)}
                            >
                                +
                            </button>

                            <p className="font-bold text-center m-4">Choose Quantity</p>
                        </div>
                    </div>

                    <div className="cart-btn">
                        <button onClick={() => dispatch(addToCart(itemdata))}
                            className="bg-green-600 w-[300px] border text-white p-2 hover:bg-green-700 ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[40%] bg-white">

                    <div className="m-[50px] font-bold">
                        <h3>Price Details</h3>

                        <p>Price {count}: <span className="text-green-500"> ₹{itemdata.price * count}/-</span></p>
                        <p>Discount: <span className="text-red-500">₹50</span></p>
                        <p>Protect Promise fee:<span className="text-green-500"> ₹200/-</span></p>
                        <p>Total Price: <span className="text-green-500"> ₹{itemdata.price * count - disc + extraFee}/-</span></p>
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
            </div >
            <Carouselfunc />
        </section >
    )
}

export default CartforApi;