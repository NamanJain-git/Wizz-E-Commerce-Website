import { createSlice } from "@reduxjs/toolkit";

const Slicecart = createSlice({
    name: "cart",
    initialState: {
        items: [], // {id, name, price, quantity}
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload);
        },

        clearCart: (state, action) => {
            state.items = [];
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = Slicecart.actions;
export default Slicecart.reducer;