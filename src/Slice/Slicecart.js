import { createSlice } from "@reduxjs/toolkit";

// Read cart from localStorage when the app starts
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedBuyNow =JSON.parse(localStorage.getItem("buyNowProduct")) || null;

const Slicecart = createSlice({
    name: "cart",

    initialState: {
        items: savedCart,
        buyNow: savedBuyNow,
    },

    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.items)
            );
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.items)
            );
        },

        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cartItems");
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (i) => i.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.items)
            );
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (i) => i.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.items)
            );
        },

        setBuyNowProduct: (state, action) => {
            state.buyNow = {
                ...action.payload,
                quantity: 1,
            };
            localStorage.setItem(
                "buyNowProduct",
                JSON.stringify(state.buyNow)
            );
        },

        clearBuyNow: (state) => {
            state.buyNow = null;
            localStorage.removeItem("buyNowProduct");
        },

    },

});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    setBuyNowProduct,
    clearBuyNow
} = Slicecart.actions;

export default Slicecart.reducer;