import "./Checkout.css";
import { useState } from "react";
import { useSelector } from "react-redux";



const Checkout = () => {

    console.log("Checkout Loaded");

    const [formData, setFormData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        payment: "Cash on Delivery"
    })

    const cartItems = useSelector((state) => state.cart.items);
    const buyNowProduct = useSelector((state) => state.cart.buyNow);

    const checkoutItems = buyNowProduct ? [buyNowProduct] : cartItems;
    const totalPrice = checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const [showCard, setShowCard] = useState(false);

    const checkoutCard = () => {

        if (
            !formData.fullname.trim() ||
            !formData.mobile.trim() ||
            !formData.email.trim() ||
            !formData.address.trim() ||
            !formData.city.trim() ||
            !formData.state.trim() ||
            !formData.pincode.trim()
        ) {
            alert("Please fill all the required fields.");
            return;
        }
        if (checkoutItems.length > 0) {
            setShowCard(true);
        }
    };

    const discount = 100;
    const deliveryCharge = totalPrice > 500 ? 0 : 40;
    const finalTotal = totalPrice - discount + deliveryCharge;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkoutItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        console.log(formData);
        console.log(checkoutItems);
    };

    console.log(checkoutItems);

    return (
        <section className="checkout">

            <h1 className="checkout-heading">Checkout</h1>

            <form className="checkout-container" onSubmit={handleSubmit}>

                {/* LEFT SIDE */}
                <div className="checkout-left">

                    <h2>Delivery Address</h2>

                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            type="text" placeholder="Enter Full Name" required value={formData.fullname}
                            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                    </div>

                    <div className="input-group">
                        <label>Mobile Number</label>
                        <input
                            type="tel" placeholder="Enter Mobile Number" required value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email" placeholder="Enter Email" required value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>

                    <div className="input-group">
                        <label>Address</label>
                        <textarea
                            placeholder="Enter Address" required value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    </div>

                    <div className="row">
                        <div className="input-group">
                            <label>City</label>
                            <input
                                type="text" value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label>State</label>
                            <input
                                type="text" value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Pincode</label>
                        <input
                            type="text" value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} />
                    </div>

                    <h2>Payment Method</h2>

                    <div className="payment-box">
                        <label>
                            <input
                                type="radio" name="payment" value="Cash on Delivery" checked={formData.payment === "Cash on Delivery"}
                                onChange={(e) => setFormData({ ...formData, payment: e.target.value })} />
                            Cash on Delivery
                        </label>

                        <label>
                            <input
                                type="radio" name="payment" value="UPI" checked={formData.payment === "UPI"}
                                onChange={(e) => setFormData({ ...formData, payment: e.target.value })} />
                            UPI
                        </label>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="checkout-right">

                    <h2>Order Summary</h2>

                    {checkoutItems.map((item) => (
                        <div className="summary-item" key={item.id}>
                            <img src={item.image} alt={item.title} />

                            <div className="summary-content">
                                <h4>{item.title}</h4>
                                <p>₹ {item.price}</p>
                                <p>Quantity : {item.quantity}</p>
                            </div>
                        </div>
                    ))}

                    <div className="price-details">
                        <p> <span>Subtotal</span> <span>₹{totalPrice}</span> </p>
                        <p> <span>Discount</span> <span>-₹{discount}</span> </p>
                        <p> <span>Delivery</span> <span>₹{deliveryCharge}</span> </p>
                        <hr />
                        <h3> <span>Total</span> <span>₹{finalTotal}</span> </h3>
                    </div>

                    <button type="submit" className="place-order-btn" onClick={checkoutCard}>
                        Place Order
                    </button>

                    {showCard && (
                        <div className="checkout-card">
                            <h1>🎉 Order Placed Successfully</h1>
                            <p>
                                Thank you for shopping with us.
                                Your order has been placed successfully.
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowCard(false)}
                                className="place-order-btn">
                                Continue Shopping
                            </button>
                        </div>
                    )}

                </div>

            </form>

        </section >
    )
}

export default Checkout