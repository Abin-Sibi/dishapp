import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartTotal: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            try {
                const item = action.payload;
                console.log(item)
                state.cartTotal = state.cartTotal+item;
            } catch (error) {
                console.log(error)
            }


        },
        removeItem: (state, action) => {
            try {
                const item = action.payload;
                console.log(item)
                state.cartTotal = Math.max(0, state.cartTotal-1) ;
            } catch (error) {
                console.log(error)
            }
        },
    },
});

export const cartDetails = (item) => async (dispatch) => {
    try {
        dispatch(addItem(item))
    } catch (error) {
        console.log(error, 'error inthe redux')
    }
}

export const cartremoveDetails = (item) => async (dispatch) => {
    try {
        dispatch(removeItem(item))
    } catch (error) {
        console.log(error, 'error inthe redux')
    }
}


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;