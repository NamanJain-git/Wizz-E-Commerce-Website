import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Carouselfunc from "../Carousel/Carouselpage";
import { addToCart } from "../Slice/Slicecart";
import { setBuyNowProduct } from "../Slice/Slicecart";

const CartforApi = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleAddToCart = () => {
        dispatch(addToCart({ ...itemdata, quantity: count, }));
        alert("Product Added to Cart");
    };

    const handleBuyNow = () => {
        dispatch(setBuyNowProduct({ ...itemdata, quantity: count, }));
        navigate("/checkout");
    };

    if (!itemdata) {
        return (
            <div className="py-[150px] text-center text-xl font-semibold">
                Loading Product...
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gray-100 pt-24 px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row max-w-full mb-10 bg-gray-50">
                <div className="flex flex-col w-full lg:w-[60%] justify-center items-center p-4 gap-5">
                    <div className="flex flex-col md:flex-row gap-6 items-center bg-white border rounded-lg p-4 w-full">
                        <div className="">
                            <img className="w-52 sm:w-64 md:w-72 lg:w-[300px] border rounded-lg p-2 object-contain" src={itemdata.image} alt={itemdata.title} />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <p className="font-bold">{itemdata.title}</p>
                            <p><span className="bg-green-500 rounded-[6px] text-white m-[2px] font-bold">4.5 ⭐ </span> 38,835 ratings & 1930 Reviews</p>
                            <h3 className="m-[4px]">₹{itemdata.price}/-</h3>
                        </div>
                        <div className="font-semibold text-center md:text-right">
                            <p>Delivery by Mon 18</p>
                        </div>
                    </div>

                    <div className="bg-white p-4 shadow rounded-lg w-full">
                        <span className="m-[6px] bg-green-500 rounded-[2px] text-white  font-bold">Available offers</span>
                        <p className="m-[2px] break-words">Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</p>
                        <p className="m-[2px] break-words">Bank OfferUp To ₹30 Instant Cashback on BHIM Payments App. Min Order Value ₹199. Offer Valid Once Per UserT&C</p>
                        <p className="m-[2px] break-words">Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C</p>
                        <span className="bg-green-500 rounded-[2px] text-white m-[2px] font-bold">View 5 more offers</span>
                    </div>


                    <div className="flex justify-center w-full">
                        <div className="flex flex-wrap justify-center items-center gap-4 shadow p-3 rounded-lg bg-white">

                            <button
                                className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition flex items-center justify-center"
                                onClick={() => { if (count > 1) { setCount(count - 1); } }} >
                                -
                            </button>

                            <span className="text-2xl font-bold w-12 text-center">{count}</span>

                            <button
                                className="w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center justify-center"
                                onClick={() => setCount(count + 1)} >
                                +
                            </button>

                            <p className="font-bold text-center m-4">Choose Quantity</p>
                        </div>
                    </div>

                </div>

                <div className="w-full lg:w-[40%] bg-white rounded-lg shadow">

                    <div className="p-6 font-bold">
                        <h3>Price Details</h3>

                        <p>Price {count}: <span className="text-green-500"> ₹{itemdata.price * count}/-</span></p>
                        <p>Discount: <span className="text-red-500">₹50</span></p>
                        <p>Protect Promise fee:<span className="text-green-500"> ₹200/-</span></p>
                        <p>Total Price: <span className="text-green-500"> ₹{itemdata.price * count - disc + extraFee}/-</span></p>
                    </div>

                    <div className="cart-btn flex flex-col sm:flex-row justify-center gap-4 mt-10 p-6">

                        <button
                            onClick={handleBuyNow}
                            className="bg-[#6c63ff] w-full sm:w-1/2 text-white p-3 hover:bg-[#5a31f4] rounded transition-colors"
                        >
                            Buy Now
                        </button>

                        <button
                            onClick={handleAddToCart}
                            className="bg-[#6c63ff] w-full sm:w-1/2 text-white p-3 hover:bg-[#5a31f4] rounded transition-colors"
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>
            </div >
            <Carouselfunc />
        </section >
    )
}

export default CartforApi;