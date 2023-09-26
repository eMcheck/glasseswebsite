import { createSlice } from '@reduxjs/toolkit';

export const cartGoods = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        init: (state, data) => {
            state.value = data.payload
            localStorage.setItem('cart', JSON.stringify(state.value))
        },
        increment: (state, data) => {
            let id = data.payload;
            if (state.value[id] === undefined) state.value[id] = 0;
            state.value[id]++;
            localStorage.setItem('cart', JSON.stringify(state.value))
        },
        minus: (state, data) => {
            let id = data.payload;
            state.value[id]--
            if (state.value[id] === 0) {
                delete state.value[id];
            }
            localStorage.setItem('cart', JSON.stringify(state.value));
            if (Object.keys(state.value).length === 0) {
                localStorage.removeItem('cart')
            }
        },
        deleteCatd: (state, data) => {
            let id = data.payload;
            delete state.value[id];
            localStorage.setItem('cart', JSON.stringify(state.value))
            if (Object.keys(state.value).length === 0) {
                localStorage.removeItem('cart')
            }
        },
    }
});

export const { increment, minus, deleteCatd, init } = cartGoods.actions;
export const selectGoods = state => state.cart.value;
export default cartGoods.reducer;