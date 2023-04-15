import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotal: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            try {
                const item = action.payload;
                const cartItems = JSON.parse(JSON.stringify(state.cartItems)); 
                const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
                if (existingItemIndex !== -1) {
                    cartItems[existingItemIndex].quantity++;
                } else {
                    cartItems.push({ ...item, quantity: 1 });
                }
                console.log(cartItems);
                state.cartItems = cartItems;
                state.cartTotal = cartItems.length
            } catch (error) {
                console.log(error)
            }


        },
        removeItem: (state, action) => {
            const item = action.payload;
            const cartItems = JSON.parse(JSON.stringify(state.cartItems));
            const existingItemIndex = cartItems.findIndex(
                (cartItem) => cartItem.id === item.id
            );
            if (existingItemIndex !== -1) {
                console.log('cartItems', existingItemIndex);
                const existingItem = cartItems[existingItemIndex];

                if (existingItem.quantity === 1) {
                    cartItems.splice(existingItemIndex, 1);
                } else {
                    existingItem.quantity--;
                }
                state.cartItems = cartItems;
                state.cartTotal = cartItems.length
            }
        },
    },
});

export const cartDetails = (data, id) => async (dispatch) => {
    try {
        const item = { data, id }
        dispatch(addItem(item))
    } catch (error) {
        console.log(error, 'error inthe redux')
    }
}

export const cartremoveDetails = (data, id) => async (dispatch) => {
    try {
        const item = { data, id }
        dispatch(removeItem(item))
    } catch (error) {
        console.log(error, 'error inthe redux')
    }
}


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;