import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { allProducts } from "../Categorypage/CategoryArray";
import Carouselfunc from "../Carousel/Carouselpage";
import { addToCart } from "../Slice/Slicecart";
import { setBuyNowProduct } from "../Slice/Slicecart";

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBuyNow = () => {
        dispatch(setBuyNowProduct({ ...cartItem, quantity: count, }));
        navigate("/checkout");
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...cartItem, quantity: count, }));
        alert("Product Added Successfully");
    };

    const { id } = useParams();

    const cartItem = allProducts.find(
        (item) => item.id === parseInt(id)
    );
    const [count, setCount] = useState(1);
    const disc = 50;
    const extraFee = 200;

    if (!cartItem) {
        return <div>Product not found</div>;
    }


    return (
        <section>

           <div className="min-h-screen w-full bg-gray-100 pt-24">

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

                    {/* Left Section */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-center items-center p-4 gap-6">

                        {/* Product Card */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 bg-white border rounded-lg shadow-sm p-5 w-full">

                            <div className="flex justify-center">
                                <img
                                    src={cartItem.image}
                                    alt={cartItem.title}
                                    className="w-52 sm:w-64 md:w-72 lg:w-[300px] border p-2 object-contain"
                                />
                            </div>

                            <div className="flex-1 text-center md:text-left">

                                <h2 className="font-bold text-xl">
                                    {cartItem.title}
                                </h2>

                                <p className="mt-2">
                                    <span className="bg-green-500 rounded px-2 py-1 text-white font-bold">
                                        4.5 ⭐
                                    </span>{" "}
                                    38,835 ratings & 1930 Reviews
                                </p>

                                <h3 className="mt-3 text-2xl font-bold">
                                    ₹{cartItem.price}/-
                                </h3>

                                <p className="mt-3 font-semibold">
                                    Delivery by Mon 18
                                </p>

                            </div>

                        </div>

                        {/* Offers */}
                        <div className="bg-white shadow rounded-lg p-4 w-full break-words">

                            <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">
                                Available Offers
                            </span>

                            <p className="mt-3">
                                Bank Offer 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000.
                            </p>

                            <p className="mt-2">
                                Up to ₹30 Instant Cashback on BHIM Payments.
                            </p>

                            <p className="mt-2">
                                Special Price: Get extra ₹4000 off.
                            </p>

                            <span className="inline-block mt-3 bg-green-500 text-white px-2 py-1 rounded font-bold">
                                View 5 more offers
                            </span>

                        </div>

                        {/* Quantity */}
                        <div className="bg-white shadow rounded-lg p-4">

                            <div className="flex items-center gap-4">

                                <button
                                    className="w-10 h-10 bg-red-500 text-white rounded-full"
                                    onClick={() => {
                                        if (count > 1) {
                                            setCount(count - 1);
                                        }
                                    }}
                                >
                                    -
                                </button>

                                <span className="text-2xl font-bold w-12 text-center">
                                    {count}
                                </span>

                                <button
                                    className="w-10 h-10 bg-green-500 text-white rounded-full"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>

                                <p className="font-semibold hidden sm:block">
                                    Choose Quantity
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-[40%] bg-white p-6 lg:pt-36">

                        <div className="font-bold space-y-4">

                            <h3 className="text-2xl">
                                Price Details
                            </h3>

                            <p>
                                Price ({count}) :
                                <span className="text-green-500">
                                    {" "}₹{cartItem.price * count}/-
                                </span>
                            </p>

                            <p>
                                Discount :
                                <span className="text-red-500">
                                    {" "}₹50
                                </span>
                            </p>

                            <p>
                                Protect Promise Fee :
                                <span className="text-green-500">
                                    {" "}₹200/-
                                </span>
                            </p>

                            <hr />

                            <p className="text-xl">
                                Total :
                                <span className="text-green-500">
                                    {" "}
                                    ₹{cartItem.price * count - disc + extraFee}/-
                                </span>
                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <button
                                onClick={handleBuyNow}
                                className="w-full sm:w-1/2 bg-[#6c63ff] text-white p-3 rounded hover:bg-[#5a31f4]"
                            >
                                Buy Now
                            </button>

                            <button
                                onClick={handleAddToCart}
                                className="w-full sm:w-1/2 bg-[#6c63ff] text-white p-3 rounded hover:bg-[#5a31f4]"
                            >
                                Add to Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <Carouselfunc />

        </section>
    );

}

export default Cart;